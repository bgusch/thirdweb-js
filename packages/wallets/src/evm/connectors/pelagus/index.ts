import {AsyncStorage} from "../../../core/AsyncStorage";
import {
  AddChainError,
  ChainNotConfiguredError,
  ConnectorNotFoundError, ProviderRpcError,
  ResourceUnavailableError,
  RpcError, SwitchChainError,
  UserRejectedRequestError,
} from "../../../lib/wagmi-core/errors";
import {walletIds} from "../../constants/walletIds";
import {InjectedConnector, InjectedConnectorOptions} from "../injected";
import type {Chain} from "@thirdweb-dev/chains";
import {providers, utils} from "ethers";
import {getInjectedPelagusProvider} from "./getInjectedPelagusProvider";
import {normalizeChainId} from "../../../lib/wagmi-core";
import {getValidPublicRPCUrl} from "../../utils/url";

export type PelagusConnectorOptions = Pick<InjectedConnectorOptions,
  "shimDisconnect"> & {
  /**
   * While "disconnected" with `shimDisconnect`, allows user to select a different Pelagus account (than the currently connected account) when trying to connect.
   */
  UNSTABLE_shimOnConnectSelectAccount?: boolean;
};

type PelagusConnectorConstructorArg = {
  chains?: Chain[];
  connectorStorage: AsyncStorage;
  options?: PelagusConnectorOptions;
};

export class PelagusConnector extends InjectedConnector {
  readonly id = walletIds.pelagus;
  #UNSTABLE_shimOnConnectSelectAccount: PelagusConnectorOptions["UNSTABLE_shimOnConnectSelectAccount"];

  constructor(arg: PelagusConnectorConstructorArg) {
    const defaultOptions = {
      name: "Pelagus",
      shimDisconnect: true,
      shimChainChangedDisconnect: true,
      getProvider: getInjectedPelagusProvider,
    };

    const options = {
      ...defaultOptions,
      ...arg.options,
    };

    super({
      chains: arg.chains,
      options,
      connectorStorage: arg.connectorStorage,
    });

    this.#UNSTABLE_shimOnConnectSelectAccount =
      options.UNSTABLE_shimOnConnectSelectAccount;
  }

  /**
   * Connect to injected Pelagus provider
   */
  async connect(options: { chainId?: number } = {}) {
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new ConnectorNotFoundError();
      }

      this.setupListeners();

      // emit "connecting" event
      this.emit("message", {type: "connecting"});

      // Attempt to show wallet select prompt with `wallet_requestPermissions` when
      // `shimDisconnect` is active and account is in disconnected state (flag in storage)
      let account: string | null = null;
      if (
        this.#UNSTABLE_shimOnConnectSelectAccount &&
        this.options?.shimDisconnect &&
        !Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))
      ) {
        account = await this.getAccount().catch(() => null);
        const isConnected = !!account;
        if (isConnected) {
          // Attempt to show another prompt for selecting wallet if already connected
          try {
            await provider.request({
              method: "wallet_requestPermissions",
              params: [{quai_accounts: {}}],
            });
          } catch (error) {
            // Not all MetaMask injected providers support `wallet_requestPermissions` (e.g. MetaMask iOS).
            // Only bubble up error if user rejects request
            if (this.isUserRejectedRequestError(error)) {
              throw new UserRejectedRequestError(error);
            }
          }
        }
      }

      // if account is not already set, request accounts and use the first account
      if (!account) {
        const accounts = await provider.request({
          method: "quai_requestAccounts",
        });
        account = utils.getAddress(accounts[0] as string);
      }

      // get currently connected chainId
      let connectedChainId = await this.getChainId();
      // check if connected chain is unsupported
      let isUnsupported = this.isChainUnsupported(connectedChainId);

      // if chainId is given, but does not match the currently connected chainId, switch to the given chainId
      if (options.chainId && connectedChainId !== options.chainId) {
        try {
          await this.switchChain(options.chainId);
          // recalculate the chainId and isUnsupported
          connectedChainId = options.chainId;
          isUnsupported = this.isChainUnsupported(options.chainId);
        } catch (e) {
          console.error(`Could not switch to chain id : ${options.chainId}`, e);
        }
      }

      // if shimDisconnect is enabled
      if (this.options?.shimDisconnect) {
        // add shimDisconnectKey in storage - this signals that connector is "connected"
        await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }

      const connectionInfo = {
        chain: {id: connectedChainId, unsupported: isUnsupported},
        provider: provider,
        account,
      };

      this.emit("connect", connectionInfo);
      return connectionInfo;
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) {
        throw new UserRejectedRequestError(error);
      }
      if ((error as RpcError).code === -32002) {
        throw new ResourceUnavailableError(error);
      }
      throw error;
    }
  }

  /**
   * @returns The first account address from the injected provider
   */
  async getAccount() {
    const provider = await this.getProvider();
    console.log("getAccount",provider)
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    const accounts = await provider.request({
      method: "quai_accounts",
    });

    // return checksum address
    // https://docs.ethers.org/v5/api/utils/address/#utils-getAddress
    return utils.getAddress(accounts[0] as string);
  }

  /**
   * @returns The `chainId` of the currently connected chain from injected provider normalized to a `number`
   */
  async getChainId() {
    const provider = await this.getProvider();
    console.log("getChainId",provider)
    if (!provider) {
      throw new ConnectorNotFoundError();
    }
    return provider.request({method: "quai_chainId"}).then(normalizeChainId);
  }

  /**
   * get a `signer` for given `chainId`
   */
  async getSigner({chainId}: { chainId?: number } = {}) {
    const [provider, account] = await Promise.all([
      this.getProvider(),
      this.getAccount(),
    ]);

    console.log("getSigner",provider, account)

    // ethers.providers.Web3Provider
    console.log(await new providers.Web3Provider(
      provider as providers.ExternalProvider,
      chainId,
    ).getSigner(account));

    return new providers.Web3Provider(
      provider as providers.ExternalProvider,
      chainId,
    ).getSigner(account);
  }

  /**
   * switch to given chain
   */
  async switchChain(chainId: number): Promise<Chain> {
    console.log("switchChain")
    const provider = await this.getProvider();
    if (!provider) {
      throw new ConnectorNotFoundError();
    }

    const chainIdHex = utils.hexValue(chainId);

    try {
      // request provider to switch to given chainIdHex
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{chainId: chainIdHex}],
      });
      const chain = this.chains.find((_chain) => _chain.chainId === chainId);
      if (chain) {
        return chain;
      }

      return {
        chainId: chainId,
        name: `Chain ${chainIdHex}`,
        slug: `${chainIdHex}`,
        nativeCurrency: {name: "Ether", decimals: 18, symbol: "ETH"},
        rpc: [""],
        chain: "",
        shortName: "",
        testnet: true,
      };
    } catch (error) {
      // if could not switch to given chainIdHex

      // if tried to connect to a chain that is not configured
      const chain = this.chains.find((_chain) => _chain.chainId === chainId);
      if (!chain) {
        throw new ChainNotConfiguredError({chainId, connectorId: this.id});
      }

      // if chain is not added to provider
      if (
        (error as ProviderRpcError).code === 4902 ||
        // Unwrapping for MetaMask Mobile
        // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
        (error as RpcError<{ originalError?: { code: number } }>)?.data
          ?.originalError?.code === 4902
      ) {
        try {
          // request provider to add chain
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: chainIdHex,
                chainName: chain.name,
                nativeCurrency: chain.nativeCurrency,
                rpcUrls: getValidPublicRPCUrl(chain), // no client id on purpose here
                blockExplorerUrls: this.getBlockExplorerUrls(chain),
              },
            ],
          });
          return chain;
        } catch (addError) {
          // if user rejects request to add chain
          if (this.isUserRejectedRequestError(addError)) {
            throw new UserRejectedRequestError(error);
          }

          // else other error
          throw new AddChainError();
        }
      }

      if (this.isUserRejectedRequestError(error)) {
        throw new UserRejectedRequestError(error);
      }
      throw new SwitchChainError(error);
    }
  }

  async switchAccount() {
    const provider = await this.getProvider();
    await provider.request({
      method: "wallet_requestPermissions",
      params: [{quai_accounts: {}}],
    });
  }

}

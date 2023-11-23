import {AsyncStorage} from "../../../core/AsyncStorage";
import {
  ConnectorNotFoundError,
  ResourceUnavailableError,
  RpcError,
  UserRejectedRequestError,
} from "../../../lib/wagmi-core/errors";
import {walletIds} from "../../constants/walletIds";
import {InjectedConnector, InjectedConnectorOptions} from "../injected";
import type {Chain} from "@thirdweb-dev/chains";
import {utils} from "ethers";
import {getInjectedPelagusProvider} from "./getInjectedPelagusProvider";

type PelagusConnectorConstructorArg = {
  chains?: Chain[];
  connectorStorage: AsyncStorage;
  options?: InjectedConnectorOptions;
};

export class PelagusConnector extends InjectedConnector {

  readonly id = walletIds.pelagus;

  constructor(arg: PelagusConnectorConstructorArg) {
    const defaultOptions = {
      name: "Pelagus",
      shimDisconnect: true,
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

      // request account addresses from injected provider
      const accountAddresses = await provider.request({
        method: "eth_requestAccounts",
      });

      // get the first account address
      const firstAccountAddress = utils.getAddress(
        accountAddresses[0] as string,
      );

      // Switch to given chain if a chainId is specified
      let connectedChainId = await this.getChainId();
      // Check if currently connected chain is unsupported
      // chainId is considered unsupported if chainId is not in the list of this.chains array
      let isUnsupported = this.isChainUnsupported(connectedChainId);

      // if chainId is specified and it is not the same as the currently connected chain
      if (options.chainId && connectedChainId !== options.chainId) {
        // switch to the given chain
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
        // add the shim shimDisconnectKey => it signals that wallet is connected
        await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }

      const connectionInfo = {
        account: firstAccountAddress,
        chain: { id: connectedChainId, unsupported: isUnsupported },
        provider,
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

}

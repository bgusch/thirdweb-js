import type { WalletConnectConnector as WalletConnectConnectorType } from "../connectors/wallet-connect";
import type { QRModalOptions } from "../connectors/wallet-connect/qrModalOptions";
import { Connector, WagmiAdapter } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
import type { PelagusConnector as PelagusConnectorType } from "../connectors/pelagus";
import { walletIds } from "../constants/walletIds";
import { TW_WC_PROJECT_ID } from "../constants/wc";
import { getInjectedPelagusProvider } from "../connectors/pelagus/getInjectedPelagusProvider";

type PelagusAdditionalOptions = {
  /**
   * Whether to open the default Wallet Connect QR code Modal for connecting to Zerion Wallet on mobile if Zerion is not injected when calling connect().
   */
  qrcode?: boolean;

  /**
   * When connecting Pelagus using the QR Code - Wallet Connect connector is used which requires a project id.
   * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
   *
   * https://docs.walletconnect.com/2.0/web3modal/options#projectid-required
   */
  projectId?: string;

  /**
   * options to customize the Wallet Connect QR Code Modal ( only relevant when qrcode is true )
   *
   * https://docs.walletconnect.com/2.0/web3modal/options
   */
  qrModalOptions?: QRModalOptions;
};

export type PelagusWalletOptions = WalletOptions<PelagusAdditionalOptions>;

type ConnectWithQrCodeArgs = {
  chainId?: number;
  onQrCodeUri: (uri: string) => void;
  onConnected: (accountAddress: string) => void;
};

export class PelagusWallet extends AbstractClientWallet<PelagusAdditionalOptions> {
  connector?: Connector;
  walletConnectConnector?: WalletConnectConnectorType;
  pelagusConnector?: PelagusConnectorType;
  isInjected: boolean;

  // see type WalletMeta
  // need urls for firefox, android, ios, etc.
  static meta = {
    name: "Pelagus",
    iconURL:
      "https://lh3.googleusercontent.com/mLeS93yjZNrJeeEEEXKU6wojKnT8GVnCpMyVM4m7q37l8jybc1nu1oj00gNjBk40aoMrNfU74quKSsQr5w0l8Nl4J3Q=w128-h128-e365-rj-sc0x00ffffff",
    urls: {
      chrome:
        "https://chrome.google.com/webstore/detail/pelagus/gaegollnpijhedifeeeepdoffkgfcmbc",
    },
  };

  static id = walletIds.pelagus as string;

  public get walletName() {
    return "Pelagus" as const;
  }

  constructor(options: PelagusWalletOptions) {
    super(PelagusWallet.id, options);
    this.isInjected = !!getInjectedPelagusProvider();
  }

  protected async getConnector(): Promise<Connector> {
    if (!this.connector) {
      // if Pelagus is injected, use the injected connector
      // otherwise, use the wallet connect connector for using the Pelagus app on mobile via QR code scan

      if (this.isInjected) {
        // import the connector dynamically
        const { PelagusConnector } = await import("../connectors/pelagus");
        const pelagusConnector = new PelagusConnector({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: true,
          },
        });

        this.pelagusConnector = pelagusConnector;

        this.connector = new WagmiAdapter(pelagusConnector);
      } else {
        const { WalletConnectConnector } = await import(
          "../connectors/wallet-connect"
        );

        const walletConnectConnector = new WalletConnectConnector({
          chains: this.chains,
          options: {
            projectId: this.options?.projectId || TW_WC_PROJECT_ID, // TODO,
            storage: this.walletStorage,
            qrcode: this.options?.qrcode,
            dappMetadata: this.dappMetadata,
            qrModalOptions: this.options?.qrModalOptions,
          },
        });

        walletConnectConnector.getProvider().then((provider) => {
          provider.signer.client.on("session_request_sent", () => {
            this.emit("wc_session_request_sent");
          });
        });

        // need to save this for getting the QR code URI
        this.walletConnectConnector = walletConnectConnector;
        this.connector = new WagmiAdapter(walletConnectConnector);
      }
    }

    return this.connector;
  }

  /**
   * connect to wallet with QR code
   *
   * @example
   * ```typescript
   * pelagus.connectWithQrCode({
   *  chainId: 1,
   *  onQrCodeUri(qrCodeUri) {
   *    // render the QR code with `qrCodeUri`
   *  },
   *  onConnected(accountAddress)  {
   *    // update UI to show connected state
   *  },
   * })
   * ```
   */
  async connectWithQrCode(options: ConnectWithQrCodeArgs) {
    await this.getConnector();
    const wcConnector = this.walletConnectConnector;

    if (!wcConnector) {
      throw new Error("WalletConnect connector not found");
    }

    const wcProvider = await wcConnector.getProvider();

    // set a listener for display_uri event
    wcProvider.on("display_uri", (uri) => {
      options.onQrCodeUri(uri);
    });

    // trigger connect flow
    this.connect({ chainId: options.chainId }).then(options.onConnected);
  }

}

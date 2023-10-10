import type { WalletOptions, WalletConfig } from "@thirdweb-dev/react-core";
import {
  PelagusWallet,
  getInjectedPelagusProvider
} from "@thirdweb-dev/wallets";
import { PelagusConnectUI } from "./PelagusConnectUI";

type PelagusWalletOptions = {
  /**
   * When connecting MetaMask using the QR Code - Wallet Connect connector is used which requires a project id.
   * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
   *
   * https://docs.walletconnect.com/2.0/web3modal/options#projectid-required
   */
  projectId?: string;

  /**
   * If true, the wallet will be tagged as "reccomended" in ConnectWallet Modal
   */
  recommended?: boolean;
};

export const pelagusWallet = (
  options?: PelagusWalletOptions,
): WalletConfig<PelagusWallet> => {
  return {
    id: PelagusWallet.id,
    recommended: options?.recommended,
    meta: {
      ...PelagusWallet.meta,
      iconURL:
        "data:image/jpeg;base64,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",
    },
    create: (walletOptions: WalletOptions) => {
      const wallet = new PelagusWallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false,
      });

      return wallet;
    },
    connectUI: PelagusConnectUI,
    isInstalled() {
      return !!getInjectedPelagusProvider();
    },
  };
};

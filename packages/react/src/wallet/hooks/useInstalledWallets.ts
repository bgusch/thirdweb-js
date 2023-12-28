import {
  assertWindowEthereum,
  getInjectedCoinbaseProvider,
  getInjectedMetamaskProvider,
  getInjectedPelagusProvider,
} from "@thirdweb-dev/wallets";

/**
 * @internal
 */
export function useInstalledWallets() {
  let isMetamaskInstalled = false;
  let isCoinbaseWalletInstalled = false;
  let isPelagusInstalled = false;
  let isZerionWalletInstalled = false;
  let isTrustWalletInstalled = false;

  const window_: Window | undefined = globalThis?.window;
  if (assertWindowEthereum(window_)) {
    isMetamaskInstalled = !!getInjectedMetamaskProvider();
    isCoinbaseWalletInstalled = !!getInjectedCoinbaseProvider();
    isPelagusInstalled = !!getInjectedPelagusProvider();
    isZerionWalletInstalled = !!window_.ethereum?.isZerion;
    isTrustWalletInstalled = !!window_.ethereum?.isTrust;
  }

  return {
    metamask: isMetamaskInstalled,
    coinbaseWallet: isCoinbaseWalletInstalled,
    pelagusWallet: isPelagusInstalled,
    trustWallet: isTrustWalletInstalled,
    zerionWallet: isZerionWalletInstalled,
  };
}

import { Ethereum } from "../injected/types";
import { assertWindowEthereum } from "../../utils/assertWindowEthereum";

export function getInjectedPelagusProvider(): Ethereum | undefined {
  if (typeof window === "undefined") {
    return;
  }

  function getReady(ethereum?: Ethereum): Ethereum | undefined {
    const isPelagus = !!ethereum?.isPelagus;

    if (!isPelagus) {
      return;
    }

    return ethereum;
  }

  if (assertWindowEthereum(globalThis.window)) {
    if (globalThis.window.ethereum?.providers) {
      return globalThis.window.ethereum.providers.find(getReady);
    }

    return getReady(globalThis.window.ethereum);
  }
}

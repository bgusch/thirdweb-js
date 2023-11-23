import {Ethereum} from "../injected/types";
import {assertWindowEthereum} from "../../utils/assertWindowEthereum";

interface QEthereum extends Ethereum {
  request(args: any): Promise<any>;
}

export function getInjectedPelagusProvider(): QEthereum | undefined {
  if (typeof window === "undefined") {
    return;
  }

  function getReady(ethereum?: QEthereum): QEthereum | undefined {
    const isPelagus = !!ethereum?.isPelagus;

    if (!isPelagus) {
      return;
    }

    // override some QUAI methods
    if ("request" in ethereum) {
      const origRequest = ethereum.request;
      ethereum.request = async function (args: any) {
        if (args.method && args.method.indexOf('eth_') === 0) {
          args.method = args.method.replace('eth_', 'quai_');
        }
        return origRequest(args);
      }
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

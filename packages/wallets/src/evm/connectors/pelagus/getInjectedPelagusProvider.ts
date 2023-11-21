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
        switch (args.method) {
          case "eth_accounts":
            args.method = "quai_accounts";
            break;
          case "eth_chainId":
            args.method = "quai_chainId";
            break;
          case "eth_requestAccounts":
            args.method = "quai_requestAccounts";
            break;
          case "wallet_requestPermissions":
            if (Array.isArray(args.params)) {
              args.params.forEach((par: any) => {
                if (par.eth_accounts) {
                  par.quai_accounts = par.eth_accounts
                  delete par.eth_accounts
                }
              })
            }
            break;
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

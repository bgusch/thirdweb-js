import {AsyncStorage} from "../../../core/AsyncStorage";
import {walletIds} from "../../constants/walletIds";
import {InjectedConnector, InjectedConnectorOptions} from "../injected";
import type {Chain} from "@thirdweb-dev/chains";
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

}

import { useConnect } from "@thirdweb-dev/react-core";
import { useCallback } from "react";

export function usePelagus() {
    const connect = useConnect();
    return useCallback(
        async (connectOptions?: { chainId?: number }) => {
            const { pelagusWallet } = await import(
                "../../../wallet/wallets/pelagus/pelagusWallet"
                );
            return connect(pelagusWallet(), connectOptions);
        },
        [connect],
    );
}

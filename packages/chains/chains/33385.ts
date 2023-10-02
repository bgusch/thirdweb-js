import type { Chain } from "../src/types";
export default {
  "name": "Zilliqa EVM Devnet",
  "chain": "ZIL",
  "rpc": [
    "https://zilliqa-evm-devnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://api.devnet.zilliqa.com/"
  ],
  "faucets": [
    "https://faucet.devnet.zilliqa.com/"
  ],
  "nativeCurrency": {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "decimals": 18
  },
  "infoURL": "https://www.zilliqa.com/",
  "shortName": "zil-devnet",
  "chainId": 33385,
  "networkId": 33385,
  "icon": {
    "url": "ipfs://QmTREXNgGtUhSoxFsrkhTe5LUnDBTKL5byaX8kpET6UuKp",
    "width": 2048,
    "height": 2048,
    "format": "png"
  },
  "explorers": [
    {
      "name": "Zilliqa EVM Devnet Explorer",
      "url": "https://otterscan.devnet.zilliqa.com",
      "standard": "EIP3091"
    }
  ],
  "testnet": false,
  "slug": "zilliqa-evm-devnet"
} as const satisfies Chain;
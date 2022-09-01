/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { ERC721Base, ERC721BaseInterface } from "../ERC721Base";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_royaltyRecipient",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_royaltyBps",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "prevURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "ContractURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRoyaltyRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRoyaltyBps",
        type: "uint256",
      },
    ],
    name: "DefaultRoyalty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "royaltyRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "royaltyBps",
        type: "uint256",
      },
    ],
    name: "RoyaltyForToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "batchMintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBaseURICount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getBatchIdAtIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultRoyaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getRoyaltyInfoForToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "isApprovedOrOwner",
    outputs: [
      {
        internalType: "bool",
        name: "isApprovedOrOwnerOf",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextTokenIdToMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_royaltyRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_royaltyBps",
        type: "uint256",
      },
    ],
    name: "setDefaultRoyaltyInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_bps",
        type: "uint256",
      },
    ],
    name: "setRoyaltyInfoForToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a3238038062002a32833981016040819052620000349162000304565b8351849084906200004d90600290602085019062000191565b5080516200006390600390602084019062000191565b50506000805550620000753362000094565b6200008a826001600160801b038316620000e6565b50505050620003ed565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b6127108111156200012f5760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b604482015260640160405180910390fd5b600a80546001600160a01b0384166001600160b01b03199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b8280546200019f90620003b0565b90600052602060002090601f016020900481019282620001c357600085556200020e565b82601f10620001de57805160ff19168380011785556200020e565b828001600101855582156200020e579182015b828111156200020e578251825591602001919060010190620001f1565b506200021c92915062000220565b5090565b5b808211156200021c576000815560010162000221565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200025f57600080fd5b81516001600160401b03808211156200027c576200027c62000237565b604051601f8301601f19908116603f01168101908282118183101715620002a757620002a762000237565b81604052838152602092508683858801011115620002c457600080fd5b600091505b83821015620002e85785820183015181830184015290820190620002c9565b83821115620002fa5760008385830101525b9695505050505050565b600080600080608085870312156200031b57600080fd5b84516001600160401b03808211156200033357600080fd5b62000341888389016200024d565b955060208701519150808211156200035857600080fd5b5062000367878288016200024d565b604087015190945090506001600160a01b03811681146200038757600080fd5b60608601519092506001600160801b0381168114620003a557600080fd5b939692955090935050565b600181811c90821680620003c557607f821691505b60208210811415620003e757634e487b7160e01b600052602260045260246000fd5b50919050565b61263580620003fd6000396000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c8063600dd5ea1161010f5780639bcf7a15116100a2578063b88d4fde11610071578063b88d4fde14610454578063c87b56dd14610467578063e8a3d4851461047a578063e985e9c51461048257600080fd5b80639bcf7a15146103f0578063a22cb46514610403578063ac9650d814610416578063b24f2d391461043657600080fd5b8063754a81d9116100de578063754a81d9146103b15780638da5cb5b146103c4578063938e3d7b146103d557806395d89b41146103e857600080fd5b8063600dd5ea146103705780636352211e1461038357806363b45e2d1461039657806370a082311461039e57600080fd5b806323b872dd1161018757806342842e0e1161015657806342842e0e1461030257806342966c6814610315578063430c2081146103285780634cc157df1461033b57600080fd5b806323b872dd146102a25780632419f51b146102b55780632a55205a146102c85780633b1475a7146102fa57600080fd5b8063081812fc116101c3578063081812fc1461023b578063095ea7b31461026657806313af40351461027957806318160ddd1461028c57600080fd5b806275a317146101e957806301ffc9a7146101fe57806306fdde0314610226575b600080fd5b6101fc6101f7366004611f92565b6104be565b005b61021161020c366004611ff6565b610548565b60405190151581526020015b60405180910390f35b61022e6105b5565b60405161021d919061206b565b61024e61024936600461207e565b610647565b6040516001600160a01b03909116815260200161021d565b6101fc610274366004612097565b61068b565b6101fc6102873660046120c1565b610712565b600154600054035b60405190815260200161021d565b6101fc6102b03660046120dc565b610763565b6102946102c336600461207e565b61076e565b6102db6102d6366004612118565b6107dc565b604080516001600160a01b03909316835260208301919091520161021d565b600054610294565b6101fc6103103660046120dc565b610819565b6101fc61032336600461207e565b610834565b610211610336366004612097565b61083f565b61034e61034936600461207e565b6108be565b604080516001600160a01b03909316835261ffff90911660208301520161021d565b6101fc61037e366004612097565b610929565b61024e61039136600461207e565b610978565b600c54610294565b6102946103ac3660046120c1565b61098a565b6101fc6103bf36600461213a565b6109d9565b6009546001600160a01b031661024e565b6101fc6103e33660046121b8565b610a53565b61022e610aa1565b6101fc6103fe3660046121ed565b610ab0565b6101fc610411366004612212565b610b00565b61042961042436600461224e565b610b96565b60405161021d91906122c3565b600a546001600160a01b03811690600160a01b900461ffff1661034e565b6101fc610462366004612325565b610c8b565b61022e61047536600461207e565b610ccf565b61022e610dbd565b610211610490366004612381565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b6104c6610e4b565b6105175760405162461bcd60e51b815260206004820152601760248201527f4e6f7420617574686f72697a656420746f206d696e742e00000000000000000060448201526064015b60405180910390fd5b61052961052360005490565b82610e78565b61054482600160405180602001604052806000815250610eff565b5050565b60006301ffc9a760e01b6001600160e01b03198316148061057957506380ac58cd60e01b6001600160e01b03198316145b806105945750635b5e139f60e01b6001600160e01b03198316145b806105af57506001600160e01b0319821663152a902d60e11b145b92915050565b6060600280546105c4906123b4565b80601f01602080910402602001604051908101604052809291908181526020018280546105f0906123b4565b801561063d5780601f106106125761010080835404028352916020019161063d565b820191906000526020600020905b81548152906001019060200180831161062057829003601f168201915b5050505050905090565b6000610652826110c4565b61066f576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b600061069682610978565b9050806001600160a01b0316836001600160a01b031614156106cb5760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b03821614610702576106e58133610490565b610702576040516367d9dca160e11b815260040160405180910390fd5b61070d8383836110ef565b505050565b61071a610e4b565b6107575760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015260640161050e565b6107608161114b565b50565b61070d83838361119d565b6000610779600c5490565b82106107b75760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b604482015260640161050e565b600c82815481106107ca576107ca6123ef565b90600052602060002001549050919050565b6000806000806107eb866108be565b90945084925061ffff169050612710610804828761241b565b61080e9190612450565b925050509250929050565b61070d83838360405180602001604052806000815250610c8b565b61076081600161138c565b60008061084b83610978565b9050806001600160a01b0316846001600160a01b0316148061089257506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b806108b65750836001600160a01b03166108ab84610647565b6001600160a01b0316145b949350505050565b6000818152600b60209081526040808320815180830190925280546001600160a01b031680835260019091015492820192909252829115610905578051602082015161091f565b600a546001600160a01b03811690600160a01b900461ffff165b9250925050915091565b610931610e4b565b61096e5760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015260640161050e565b6105448282611567565b60006109838261161c565b5192915050565b60006001600160a01b0382166109b3576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b6109e1610e4b565b610a2d5760405162461bcd60e51b815260206004820152601760248201527f4e6f7420617574686f72697a656420746f206d696e742e000000000000000000604482015260640161050e565b610a40610a3960005490565b8484611738565b5050610a4d848483610eff565b50505050565b610a5b610e4b565b610a985760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015260640161050e565b610760816117a5565b6060600380546105c4906123b4565b610ab8610e4b565b610af55760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015260640161050e565b61070d838383611887565b6001600160a01b038216331415610b2a5760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b60608167ffffffffffffffff811115610bb157610bb1611eef565b604051908082528060200260200182016040528015610be457816020015b6060815260200190600190039081610bcf5790505b50905060005b82811015610c8457610c5430858584818110610c0857610c086123ef565b9050602002810190610c1a9190612464565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061195092505050565b828281518110610c6657610c666123ef565b60200260200101819052508080610c7c906124b2565b915050610bea565b5092915050565b610c9684848461119d565b6001600160a01b0383163b15610a4d57610cb28484848461197c565b610a4d576040516368d2bf6b60e11b815260040160405180910390fd5b6000818152600e6020526040812080546060929190610ced906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610d19906123b4565b8015610d665780601f10610d3b57610100808354040283529160200191610d66565b820191906000526020600020905b815481529060010190602001808311610d4957829003601f168201915b50505050509050600081511115610d7d5792915050565b6000610d8884611a64565b905080610d9485611c0e565b604051602001610da59291906124cd565b60405160208183030381529060405292505050919050565b60088054610dca906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610df6906123b4565b8015610e435780601f10610e1857610100808354040283529160200191610e43565b820191906000526020600020905b815481529060010190602001808311610e2657829003601f168201915b505050505081565b6000610e5f6009546001600160a01b031690565b6001600160a01b0316336001600160a01b031614905090565b6000828152600e602052604090208054610e91906123b4565b159050610ee05760405162461bcd60e51b815260206004820152600f60248201527f55524920616c7265616479207365740000000000000000000000000000000000604482015260640161050e565b6000828152600e60209081526040909120825161070d92840190611e3a565b6000546001600160a01b038416610f2857604051622e076360e81b815260040160405180910390fd5b82610f465760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038416600081815260056020908152604080832080546fffffffffffffffffffffffffffffffff19811667ffffffffffffffff8083168b0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168b01811690920217909155858452600490925290912080546001600160e01b0319168317600160a01b42909316929092029190911790558190818501903b1561106f575b60405182906001600160a01b038816906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4611038600087848060010195508761197c565b611055576040516368d2bf6b60e11b815260040160405180910390fd5b808210610fed57826000541461106a57600080fd5b6110b4565b5b6040516001830192906001600160a01b038816906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4808210611070575b506000908155610a4d9085838684565b60008054821080156105af575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b60006111a88261161c565b9050836001600160a01b031681600001516001600160a01b0316146111df5760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b03861614806111fd57506111fd8533610490565b8061121857503361120d84610647565b6001600160a01b0316145b90508061123857604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b03841661125f57604051633a954ecd60e21b815260040160405180910390fd5b61126b600084876110ef565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff1980821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b42909216919091021783558701808452922080549193909116611341576000548214611341578054602086015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050505050565b60006113978361161c565b805190915082156113fd576000336001600160a01b03831614806113c057506113c08233610490565b806113db5750336113d086610647565b6001600160a01b0316145b9050806113fb57604051632ce44b5f60e11b815260040160405180910390fd5b505b611409600085836110ef565b6001600160a01b038082166000818152600560209081526040808320805470010000000000000000000000000000000060001967ffffffffffffffff80841691909101811667ffffffffffffffff19841681178390048216600190810183169093027fffffffffffffffff0000000000000000ffffffffffffffff0000000000000000909416179290921783558b86526004909452828520805460ff60e01b1942909316600160a01b026001600160e01b03199091169097179690961716600160e01b17855591890180845292208054919490911661151d57600054821461151d578054602087015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b038716171781555b5050604051869250600091506001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4505060018054810190555050565b6127108111156115ab5760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b604482015260640161050e565b600a80546001600160a01b03841675ffffffffffffffffffffffffffffffffffffffffffff199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b60408051606081018252600080825260208201819052918101919091528160005481101561171f57600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff1615159181018290529061171d5780516001600160a01b0316156116b3579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215611718579392505050565b6116b3565b505b604051636f96cda160e11b815260040160405180910390fd5b60008061174584866124fc565b600c8054600181019091557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7018190556000818152600d60209081526040909120855192945084935061179c929091860190611e3a565b50935093915050565b6000600880546117b4906123b4565b80601f01602080910402602001604051908101604052809291908181526020018280546117e0906123b4565b801561182d5780601f106118025761010080835404028352916020019161182d565b820191906000526020600020905b81548152906001019060200180831161181057829003601f168201915b5050855193945061184993600893506020870192509050611e3a565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a16818360405161187b929190612514565b60405180910390a15050565b6127108111156118cb5760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b604482015260640161050e565b6040805180820182526001600160a01b0384811680835260208084018681526000898152600b8352869020945185546001600160a01b031916941693909317845591516001909301929092559151838152909185917f7365cf4122f072a3365c20d54eff9b38d73c096c28e1892ec8f5b0e403a0f12d910160405180910390a3505050565b606061197583836040518060600160405280602781526020016125d960279139611d24565b9392505050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906119b1903390899088908890600401612542565b6020604051808303816000875af19250505080156119ec575060408051601f3d908101601f191682019092526119e991810190612574565b60015b611a47573d808015611a1a576040519150601f19603f3d011682016040523d82523d6000602084013e611a1f565b606091505b508051611a3f576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b60606000611a71600c5490565b90506000600c805480602002602001604051908101604052809291908181526020018280548015611ac157602002820191906000526020600020905b815481526020019060010190808311611aad575b5050505050905060005b82811015611bc557818181518110611ae557611ae56123ef565b6020026020010151851015611bb357600d6000838381518110611b0a57611b0a6123ef565b602002602001015181526020019081526020016000208054611b2b906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611b57906123b4565b8015611ba45780601f10611b7957610100808354040283529160200191611ba4565b820191906000526020600020905b815481529060010190602001808311611b8757829003601f168201915b50505050509350505050919050565b611bbe6001826124fc565b9050611acb565b5060405162461bcd60e51b815260206004820152600f60248201527f496e76616c696420746f6b656e49640000000000000000000000000000000000604482015260640161050e565b606081611c325750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611c5c5780611c46816124b2565b9150611c559050600a83612450565b9150611c36565b60008167ffffffffffffffff811115611c7757611c77611eef565b6040519080825280601f01601f191660200182016040528015611ca1576020820181803683370190505b5090505b84156108b657611cb6600183612591565b9150611cc3600a866125a8565b611cce9060306124fc565b60f81b818381518110611ce357611ce36123ef565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611d1d600a86612450565b9450611ca5565b60606001600160a01b0384163b611d8c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161050e565b600080856001600160a01b031685604051611da791906125bc565b600060405180830381855af49150503d8060008114611de2576040519150601f19603f3d011682016040523d82523d6000602084013e611de7565b606091505b5091509150611df7828286611e01565b9695505050505050565b60608315611e10575081611975565b825115611e205782518084602001fd5b8160405162461bcd60e51b815260040161050e919061206b565b828054611e46906123b4565b90600052602060002090601f016020900481019282611e685760008555611eae565b82601f10611e8157805160ff1916838001178555611eae565b82800160010185558215611eae579182015b82811115611eae578251825591602001919060010190611e93565b50611eba929150611ebe565b5090565b5b80821115611eba5760008155600101611ebf565b80356001600160a01b0381168114611eea57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611f1657600080fd5b813567ffffffffffffffff80821115611f3157611f31611eef565b604051601f8301601f19908116603f01168101908282118183101715611f5957611f59611eef565b81604052838152866020858801011115611f7257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611fa557600080fd5b611fae83611ed3565b9150602083013567ffffffffffffffff811115611fca57600080fd5b611fd685828601611f05565b9150509250929050565b6001600160e01b03198116811461076057600080fd5b60006020828403121561200857600080fd5b813561197581611fe0565b60005b8381101561202e578181015183820152602001612016565b83811115610a4d5750506000910152565b60008151808452612057816020860160208601612013565b601f01601f19169290920160200192915050565b602081526000611975602083018461203f565b60006020828403121561209057600080fd5b5035919050565b600080604083850312156120aa57600080fd5b6120b383611ed3565b946020939093013593505050565b6000602082840312156120d357600080fd5b61197582611ed3565b6000806000606084860312156120f157600080fd5b6120fa84611ed3565b925061210860208501611ed3565b9150604084013590509250925092565b6000806040838503121561212b57600080fd5b50508035926020909101359150565b6000806000806080858703121561215057600080fd5b61215985611ed3565b935060208501359250604085013567ffffffffffffffff8082111561217d57600080fd5b61218988838901611f05565b9350606087013591508082111561219f57600080fd5b506121ac87828801611f05565b91505092959194509250565b6000602082840312156121ca57600080fd5b813567ffffffffffffffff8111156121e157600080fd5b6108b684828501611f05565b60008060006060848603121561220257600080fd5b8335925061210860208501611ed3565b6000806040838503121561222557600080fd5b61222e83611ed3565b91506020830135801515811461224357600080fd5b809150509250929050565b6000806020838503121561226157600080fd5b823567ffffffffffffffff8082111561227957600080fd5b818501915085601f83011261228d57600080fd5b81358181111561229c57600080fd5b8660208260051b85010111156122b157600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561231857603f1988860301845261230685835161203f565b945092850192908501906001016122ea565b5092979650505050505050565b6000806000806080858703121561233b57600080fd5b61234485611ed3565b935061235260208601611ed3565b925060408501359150606085013567ffffffffffffffff81111561237557600080fd5b6121ac87828801611f05565b6000806040838503121561239457600080fd5b61239d83611ed3565b91506123ab60208401611ed3565b90509250929050565b600181811c908216806123c857607f821691505b602082108114156123e957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561243557612435612405565b500290565b634e487b7160e01b600052601260045260246000fd5b60008261245f5761245f61243a565b500490565b6000808335601e1984360301811261247b57600080fd5b83018035915067ffffffffffffffff82111561249657600080fd5b6020019150368190038213156124ab57600080fd5b9250929050565b60006000198214156124c6576124c6612405565b5060010190565b600083516124df818460208801612013565b8351908301906124f3818360208801612013565b01949350505050565b6000821982111561250f5761250f612405565b500190565b604081526000612527604083018561203f565b8281036020840152612539818561203f565b95945050505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611df7608083018461203f565b60006020828403121561258657600080fd5b815161197581611fe0565b6000828210156125a3576125a3612405565b500390565b6000826125b7576125b761243a565b500690565b600082516125ce818460208701612013565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205487905bb3deef6069d1b923136363e846e831866899c13e46537a6f6ee364ce64736f6c634300080c0033";

type ERC721BaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721BaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Base__factory extends ContractFactory {
  constructor(...args: ERC721BaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: string,
    _symbol: string,
    _royaltyRecipient: string,
    _royaltyBps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Base> {
    return super.deploy(
      _name,
      _symbol,
      _royaltyRecipient,
      _royaltyBps,
      overrides || {}
    ) as Promise<ERC721Base>;
  }
  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _royaltyRecipient: string,
    _royaltyBps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _royaltyRecipient,
      _royaltyBps,
      overrides || {}
    );
  }
  override attach(address: string): ERC721Base {
    return super.attach(address) as ERC721Base;
  }
  override connect(signer: Signer): ERC721Base__factory {
    return super.connect(signer) as ERC721Base__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721BaseInterface {
    return new utils.Interface(_abi) as ERC721BaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Base {
    return new Contract(address, _abi, signerOrProvider) as ERC721Base;
  }
}

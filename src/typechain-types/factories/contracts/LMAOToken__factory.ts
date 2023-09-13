/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { LMAOToken, LMAOTokenInterface } from "../../contracts/LMAOToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeAddress",
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
    name: "feePercentage",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [],
    name: "precision",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526008600755620000196200017b60201b60201c565b60ff16600a6200002a919062000606565b6008553480156200003a57600080fd5b506040518060400160405280600981526020017f4c4d414f546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4c4d414f000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bf929190620003c9565b508060049080519060200190620000d8929190620003c9565b505050620000fb620000ef6200018460201b60201c565b6200018c60201b60201c565b6200012033600854633b9aca0062000114919062000657565b6200025260201b60201c565b73d4c42e502669947139d736b693c97b82d4d01f48600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200082a565b60006012905090565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002c4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bb9062000719565b60405180910390fd5b620002d860008383620003bf60201b60201c565b8060026000828254620002ec91906200073b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200039f9190620007a9565b60405180910390a3620003bb60008383620003c460201b60201c565b5050565b505050565b505050565b828054620003d790620007f5565b90600052602060002090601f016020900481019282620003fb576000855562000447565b82601f106200041657805160ff191683800117855562000447565b8280016001018555821562000447579182015b828111156200044657825182559160200191906001019062000429565b5b5090506200045691906200045a565b5090565b5b80821115620004755760008160009055506001016200045b565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200050757808604811115620004df57620004de62000479565b5b6001851615620004ef5780820291505b8081029050620004ff85620004a8565b9450620004bf565b94509492505050565b600082620005225760019050620005f5565b81620005325760009050620005f5565b81600181146200054b576002811462000556576200058c565b6001915050620005f5565b60ff8411156200056b576200056a62000479565b5b8360020a91508482111562000585576200058462000479565b5b50620005f5565b5060208310610133831016604e8410600b8410161715620005c65782820a905083811115620005c057620005bf62000479565b5b620005f5565b620005d58484846001620004b5565b92509050818404811115620005ef57620005ee62000479565b5b81810290505b9392505050565b6000819050919050565b60006200061382620005fc565b91506200062083620005fc565b92506200064f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000510565b905092915050565b60006200066482620005fc565b91506200067183620005fc565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620006ad57620006ac62000479565b5b828202905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000701601f83620006b8565b91506200070e82620006c9565b602082019050919050565b600060208201905081810360008301526200073481620006f2565b9050919050565b60006200074882620005fc565b91506200075583620005fc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200078d576200078c62000479565b5b828201905092915050565b620007a381620005fc565b82525050565b6000602082019050620007c0600083018462000798565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200080e57607f821691505b602082108103620008245762000823620007c6565b5b50919050565b61178e806200083a6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063a457c2d711610071578063a457c2d7146102ac578063a9059cbb146102dc578063d3b5dc3b1461030c578063dd62ed3e1461032a578063f2fde38b1461035a5761010b565b8063715018a6146102485780638da5cb5b1461025257806395d89b4114610270578063a001ecdd1461028e5761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806341275358146101fa57806370a08231146102185761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610376565b6040516101259190610e9f565b60405180910390f35b61014860048036038101906101439190610f5a565b610408565b6040516101559190610fb5565b60405180910390f35b61016661042b565b6040516101739190610fdf565b60405180910390f35b61019660048036038101906101919190610ffa565b610435565b6040516101a39190610fb5565b60405180910390f35b6101b46104b6565b6040516101c19190611069565b60405180910390f35b6101e460048036038101906101df9190610f5a565b6104bf565b6040516101f19190610fb5565b60405180910390f35b6102026104f6565b60405161020f9190611093565b60405180910390f35b610232600480360381019061022d91906110ae565b61051c565b60405161023f9190610fdf565b60405180910390f35b610250610564565b005b61025a610578565b6040516102679190611093565b60405180910390f35b6102786105a2565b6040516102859190610e9f565b60405180910390f35b610296610634565b6040516102a39190610fdf565b60405180910390f35b6102c660048036038101906102c19190610f5a565b61063a565b6040516102d39190610fb5565b60405180910390f35b6102f660048036038101906102f19190610f5a565b6106b1565b6040516103039190610fb5565b60405180910390f35b61031461073e565b6040516103219190610fdf565b60405180910390f35b610344600480360381019061033f91906110db565b610744565b6040516103519190610fdf565b60405180910390f35b610374600480360381019061036f91906110ae565b6107cb565b005b6060600380546103859061114a565b80601f01602080910402602001604051908101604052809291908181526020018280546103b19061114a565b80156103fe5780601f106103d3576101008083540402835291602001916103fe565b820191906000526020600020905b8154815290600101906020018083116103e157829003601f168201915b5050505050905090565b60008061041361084e565b9050610420818585610856565b600191505092915050565b6000600254905090565b6000806008548361044691906111aa565b9050600060646007548361045a91906111aa565b6104649190611233565b905061049386600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683610a1f565b6104a9868683856104a49190611264565b610a1f565b6001925050509392505050565b60006012905090565b6000806104ca61084e565b90506104eb8185856104dc8589610744565b6104e69190611298565b610856565b600191505092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61056c610c95565b6105766000610d13565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105b19061114a565b80601f01602080910402602001604051908101604052809291908181526020018280546105dd9061114a565b801561062a5780601f106105ff5761010080835404028352916020019161062a565b820191906000526020600020905b81548152906001019060200180831161060d57829003601f168201915b5050505050905090565b60075481565b60008061064561084e565b905060006106538286610744565b905083811015610698576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068f90611360565b60405180910390fd5b6106a58286868403610856565b60019250505092915050565b600080600854836106c291906111aa565b905060006064600854600754866106d991906111aa565b6106e391906111aa565b6106ed9190611233565b905061071b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682610dd9565b5061073185828461072c9190611264565b610dd9565b5060019250505092915050565b60085481565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6107d3610c95565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610842576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610839906113f2565b60405180910390fd5b61084b81610d13565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bc90611484565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610934576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092b90611516565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a129190610fdf565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a85906115a8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610afd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af49061163a565b60405180910390fd5b610b08838383610dfc565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b85906116cc565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c7c9190610fdf565b60405180910390a3610c8f848484610e01565b50505050565b610c9d61084e565b73ffffffffffffffffffffffffffffffffffffffff16610cbb610578565b73ffffffffffffffffffffffffffffffffffffffff1614610d11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0890611738565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080610de461084e565b9050610df1818585610a1f565b600191505092915050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e40578082015181840152602081019050610e25565b83811115610e4f576000848401525b50505050565b6000601f19601f8301169050919050565b6000610e7182610e06565b610e7b8185610e11565b9350610e8b818560208601610e22565b610e9481610e55565b840191505092915050565b60006020820190508181036000830152610eb98184610e66565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ef182610ec6565b9050919050565b610f0181610ee6565b8114610f0c57600080fd5b50565b600081359050610f1e81610ef8565b92915050565b6000819050919050565b610f3781610f24565b8114610f4257600080fd5b50565b600081359050610f5481610f2e565b92915050565b60008060408385031215610f7157610f70610ec1565b5b6000610f7f85828601610f0f565b9250506020610f9085828601610f45565b9150509250929050565b60008115159050919050565b610faf81610f9a565b82525050565b6000602082019050610fca6000830184610fa6565b92915050565b610fd981610f24565b82525050565b6000602082019050610ff46000830184610fd0565b92915050565b60008060006060848603121561101357611012610ec1565b5b600061102186828701610f0f565b935050602061103286828701610f0f565b925050604061104386828701610f45565b9150509250925092565b600060ff82169050919050565b6110638161104d565b82525050565b600060208201905061107e600083018461105a565b92915050565b61108d81610ee6565b82525050565b60006020820190506110a86000830184611084565b92915050565b6000602082840312156110c4576110c3610ec1565b5b60006110d284828501610f0f565b91505092915050565b600080604083850312156110f2576110f1610ec1565b5b600061110085828601610f0f565b925050602061111185828601610f0f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061116257607f821691505b6020821081036111755761117461111b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111b582610f24565b91506111c083610f24565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156111f9576111f861117b565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061123e82610f24565b915061124983610f24565b92508261125957611258611204565b5b828204905092915050565b600061126f82610f24565b915061127a83610f24565b92508282101561128d5761128c61117b565b5b828203905092915050565b60006112a382610f24565b91506112ae83610f24565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156112e3576112e261117b565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061134a602583610e11565b9150611355826112ee565b604082019050919050565b600060208201905081810360008301526113798161133d565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006113dc602683610e11565b91506113e782611380565b604082019050919050565b6000602082019050818103600083015261140b816113cf565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061146e602483610e11565b915061147982611412565b604082019050919050565b6000602082019050818103600083015261149d81611461565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611500602283610e11565b915061150b826114a4565b604082019050919050565b6000602082019050818103600083015261152f816114f3565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611592602583610e11565b915061159d82611536565b604082019050919050565b600060208201905081810360008301526115c181611585565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611624602383610e11565b915061162f826115c8565b604082019050919050565b6000602082019050818103600083015261165381611617565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006116b6602683610e11565b91506116c18261165a565b604082019050919050565b600060208201905081810360008301526116e5816116a9565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611722602083610e11565b915061172d826116ec565b602082019050919050565b6000602082019050818103600083015261175181611715565b905091905056fea26469706673582212204d3834ad2c4c10838ef88fafce75ec433ba5aeec428ad318eea7079c42c357d064736f6c634300080d0033";

type LMAOTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LMAOTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LMAOToken__factory extends ContractFactory {
  constructor(...args: LMAOTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      LMAOToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LMAOToken__factory {
    return super.connect(runner) as LMAOToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LMAOTokenInterface {
    return new Interface(_abi) as LMAOTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LMAOToken {
    return new Contract(address, _abi, runner) as unknown as LMAOToken;
  }
}

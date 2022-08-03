export type LITBaseChain<VMType extends string> = {
  name: string;
  symbol: string;
  decimals: number;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  vmType: VMType;
};

export type LITEVMChain = LITBaseChain<"EVM"> & {
  contractAddress: string; // The address of the token contract for the optional predeployed ERC1155 contract.  Only present on EVM chains.
  chainId: number; // The chain ID of the chain that this token contract is deployed on.  Used for EVM chains.
  type: string;
};

export type LITSVMChain = LITBaseChain<"SVM">;

export type LITCosmosChain = LITBaseChain<"CVM"> & {
  chainId: string;
};

export type LITChain = LITEVMChain | LITSVMChain | LITCosmosChain;

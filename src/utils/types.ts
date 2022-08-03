export type AccessControlCondition = {
  contractAddress: string; // The address of the contract that will be queried
  chain: string; // The chain name of the chain that this contract is deployed on.  See LIT_CHAINS for currently supported chains.
  standardContractType: string; // If the contract is an ERC20, ERC721, or ERC1155, please put that here
  method: string; // The smart contract function to call
  parameters: string[]; // The parameters to use when calling the smart contract.  You can use the special ":userAddress" parameter which will be replaced with the requesting user's wallet address, verified via message signature
  returnValueTest: {
    comparator: string;
    value: string;
  }; // An object containing two keys: "comparator" and "value".  The return value of the smart contract function will be compared against these.  For example, to check if someone holds an NFT, you could use "comparator: >" and "value: 0" which would check that a user has a token balance greater than zero.
};

export type EVMContractCondition = {
  contractAddress: string; // The address of the contract that will be queried
  chain: string; // The chain name of the chain that this contract is deployed on.  See LIT_CHAINS for currently supported chains.
  functionName: string; // The smart contract function to call
  functionParams: string[]; // The parameters to use when calling the smart contract.  You can use the special ":userAddress" parameter which will be replaced with the requesting user's wallet address, verified via message signature
  functionAbi: Object; // The ABI of the smart contract function to call.  This is used to encode the function parameters and decode the return value of the function.  Do not pass the entire contract ABI here.  Instead, find the function you want to call in the contract ABI and pass that function's ABI here.
  returnValueTest: {
    key: string;
    comparator: string;
    value: string;
  }; // An object containing three keys: "key", "comparator" and "value".  The return value of the smart contract function will be compared against these.  For example, to check if someone holds an NFT, you could use "key": "", "comparator: >" and "value: 0" which would check that a user has a token balance greater than zero.  The "key" is used when the return value is a struct which contains multiple values and should be the name of the returned value from the function abi.  You must always pass "key" when using "returnValueTest", even if you pass an empty string for it, because the function only returns a single value.
};

export type SolRpcCondition = {
  method: string; // The Solana RPC method to be called.  You can find a list here: https://docs.solana.com/developing/clients/jsonrpc-api
  params: string[]; // The parameters to use when making the RPC call.  You can use the special ":userAddress" parameter which will be replaced with the requesting user's wallet address, verified via message signature
  chain: string; //- The chain name of the chain that this contract is deployed on.  See ALL_LIT_CHAINS for currently supported chains.  On Solana, we support "solana" for mainnet, "solanaDevnet" for devnet and "solanaTestnet" for testnet.
  returnValueTest: {
    key: string;
    comparator: string;
    value: string;
  }; // An object containing three keys: "key", "comparator" and "value".  The return value of the rpc call will be compared against these.  The "key" selector supports JSONPath syntax, so you can filter and iterate over the results.  For example, to check if someone holds an NFT with address 29G6GSKNGP8K6ATy65QrNZk4rNgsZX1sttvb5iLXWDcE, you could use "method": "GetTokenAccountsByOwner", "params": [":userAddress",{"programId":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"encoding":"jsonParsed"}], "key": "$[?(@.account.data.parsed.info.mint == "29G6GSKNGP8K6ATy65QrNZk4rNgsZX1sttvb5iLXWDcE")].account.data.parsed.info.tokenAmount.amount", "comparator: >" and "value: 0" which would check that a user has a token balance greater than zero.  The "key" is used when the return value is an array or object which contains multiple values and should be the name of the returned value or a JSONPath item.  You must always pass "key" when using "returnValueTest", even if you pass an empty string for it, because the rpc call only returns a single value.
};

export type CosmosCondition = {
  path: string; // The RPC URL path that will be called.  This will typically contain any parameters you need for the call.  Note that you can use the special ":userAddress" parameter which will be replaced with the requesting user's wallet address, verified via message signature.  For example, this path would be used to get the requesting user's balance: "/cosmos/bank/v1beta1/balances/:userAddress"
  chain: string; // The chain name of the chain that this contract is deployed on.  See ALL_LIT_CHAINS for currently supported chains.  On Cosmos we currently support "cosmos" and "kyve"
  returnValueTest: {
    key: string;
    comparator: string;
    value: string;
  }; // An object containing three keys: "key", "comparator" and "value".  The return value of the rpc call will be compared against these.  The "key" selector supports JSONPath syntax, so you can filter and iterate over the results.  For example, to check the balance of someone's account, you can use the key "$.balances[0].amount" which will pull out balances[0].amount from the JSON response and compare it against the "value" field according to the "comparator".  The "key" is used when the return value is an array or object which contains multiple values and should be the name of the returned value or a JSONPath item.  You must always pass "key" when using "returnValueTest", even if you pass an empty string for it, because the rpc call only returns a single value.
};

export type ResourceId = {
  baseUrl: string; // The base url of the resource that will be authorized
  path: string; // The path of the url of the resource that will be authorized
  orgId: string; // The org id that the user would be authorized to belong to.  The orgId key must be present but it may contain an empty string if you don't need to store anything in it.
  role: string; // The role that the user would be authorized to have.  The role key must be present but it may contain an empty string if you don't need to store anything in it.
  extraData: string; // Any extra data you may want to store.  You may store stringified JSON in here, for example.  The extraData key must be present but it may contain an empty string if you don't need to store anything in it.
};

export type CallRequest = {
  to: string; // The address of the contract that will be queried
  from: string; // Optional.  The address calling the function.
  data: string; // Hex encoded data to send to the contract.
};

export type LitNodeClientConfig = {
  alertWhenUnauthorized: boolean;
  minNodeCount: number;
  debug: boolean;
};

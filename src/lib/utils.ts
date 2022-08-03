import { LIT_AUTH_SIG_CHAIN_KEYS } from "./constants.js";

export const printError = (e: Error) => {
  console.log("Error Stack", e.stack);
  console.log("Error Name", e.name);
  console.log("Error Message", e.message);
};

export const mostCommonString = (arr: string[]) => {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
};

export class LitError extends Error {
  name: string;
  errorCode: string;
  constructor(message: string, name: string, errorCode: string) {
    super(message);
    this.name = name;
    this.errorCode = errorCode;
  }
}
export const throwError = ({
  message,
  name,
  errorCode,
}: {
  message: string;
  name: string;
  errorCode: string;
}) => {
  throw new LitError(message, name, errorCode);
};

export const log = (...args: any[]) => {
  if (
    globalThis &&
    globalThis.litConfig &&
    globalThis.litConfig.debug === false
  ) {
    return;
  }
  args.unshift("[Lit-JS-SDK]");
  console.log(...args);
};

/**
 *
 * Get the type of a variable, could be an object instance type.
 * eg Uint8Array instance should return 'Uint8Array` as string
 * or simply a `string` or `int` type
 *
 */
export const getVarType = <T = unknown>(value: T): string => {
  return Object.prototype.toString.call(value).slice(8, -1);
  // // if it's an object
  // if (value instanceof Object) {
  //   if (value.constructor.name == "Object") {
  //     return "Object";
  //   }
  //   return value.constructor.name;
  // }

  // // if it's other type, like string and int
  // return typeof value;
};

/**
 *
 *  Check if the given value is the given type
 *  If not, throw `invalidParamType` error
 *
 */
export const checkType = <T = unknown>({
  value,
  allowedTypes,
  paramName,
  functionName,
  throwOnError = true,
}: {
  value: T;
  allowedTypes: string[];
  paramName: string;
  functionName: string;
  throwOnError?: boolean;
}): boolean => {
  if (!allowedTypes.includes(getVarType(value))) {
    let message = `Expecting ${allowedTypes.join(
      " or "
    )} type for parameter named ${paramName} in Lit-JS-SDK function ${functionName}(), but received "${getVarType(
      value
    )}" type instead. value: ${
      value instanceof Object ? JSON.stringify(value) : value
    }`;

    if (throwOnError) {
      throwError({
        message,
        name: "invalidParamType",
        errorCode: "invalid_param_type",
      });
    }
    return false;
  }

  return true;
};

export const checkIfAuthSigRequiresChainParam = <T = unknown>(
  authSig: Record<string, unknown>,
  chain: T,
  functionName: string
) => {
  for (const key of LIT_AUTH_SIG_CHAIN_KEYS) {
    if (key in authSig) {
      return true;
    }
  }

  // if we're here, then we need the chain param
  if (
    !checkType<T>({
      value: chain,
      allowedTypes: ["String"],
      paramName: "chain",
      functionName,
    })
  )
    return false;

  return true;
};

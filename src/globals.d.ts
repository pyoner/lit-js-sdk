import type { Keplr } from "@keplr-wallet/types";
import { LitNodeClientConfig } from "./types";

declare global {
  interface Window {
    keplr?: Keplr;
  }
  var litConfig: LitNodeClientConfig;
}

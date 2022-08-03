import type { Keplr } from "@keplr-wallet/types";
import { LitNodeClientConfig } from "./utils/types";
declare global {
  interface Window {
    keplr?: Keplr;
  }
}

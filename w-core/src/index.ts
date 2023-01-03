import { InterfaceFromRCore as I1 } from "@abdurahmanus/r-core";
export * from "@abdurahmanus/r-core";

export enum EnumFromWCore {
  C = "c",
  D = "d",
}

// merge interface
export interface InterfaceFromRCore extends I1 {
  b: number;
}

export interface InterfaceFromWCore {
  c: boolean;
}

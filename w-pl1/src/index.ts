/// <reference path="../node_modules/@abdurahmanus/r-pl1/dist/index.d.ts" />

import "@abdurahmanus/w-core";
export * as R from "@abdurahmanus/r-core";

declare module "@abdurahmanus/w-core" {
  export interface InterfaceFromWPl1 {
    pl1: number;
  }
}

import type { ConfigParameter, FuncOrVal, RuneReturnType } from "../types";
import { type GetConnectorsReturnType } from "@wagmi/core";
export type CreateConnectorsParameters = FuncOrVal<ConfigParameter>;
export type CreateConnectorsReturnType = RuneReturnType<GetConnectorsReturnType>;
export declare function createConnectors(parameters?: CreateConnectorsParameters): CreateConnectorsReturnType;

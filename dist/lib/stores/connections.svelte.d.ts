import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type GetConnectionsReturnType } from "@wagmi/core";
export type CreateConnectionsParameters = FuncOrVal<ConfigParameter>;
export type CreateConnectionsReturnType = RuneReturnType<GetConnectionsReturnType>;
export declare function createConnections(parameters?: CreateConnectionsParameters): CreateConnectionsReturnType;

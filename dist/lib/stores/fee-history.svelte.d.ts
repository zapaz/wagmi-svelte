import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import { type Config, type GetFeeHistoryErrorType, type ResolvedRegister } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type GetFeeHistoryData, type GetFeeHistoryOptions, type GetFeeHistoryQueryFnData, type GetFeeHistoryQueryKey } from "@wagmi/core/query";
export type CreateFeeHistoryParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetFeeHistoryData> = FuncOrVal<Evaluate<GetFeeHistoryOptions<config, chainId> & ConfigParameter<config> & QueryParameter<GetFeeHistoryQueryFnData, GetFeeHistoryErrorType, selectData, GetFeeHistoryQueryKey<config, chainId>>>>;
export type CreateFeeHistoryReturnType<selectData = GetFeeHistoryData> = RuneReturnType<QueryObserverResult<selectData, GetFeeHistoryErrorType>>;
export declare function createFeeHistory<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetFeeHistoryData>(parameters?: CreateFeeHistoryParameters<config, chainId, selectData>): CreateFeeHistoryReturnType<selectData>;

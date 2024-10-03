import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetTransactionCountErrorType } from "@wagmi/core";
import { type GetTransactionCountData, type GetTransactionCountOptions, type GetTransactionCountQueryFnData, type GetTransactionCountQueryKey } from "@wagmi/core/query";
export type CreateTransactionCountParameters<config extends Config = Config, selectData = GetTransactionCountData> = FuncOrVal<GetTransactionCountOptions<config> & ConfigParameter<config> & QueryParameter<GetTransactionCountQueryFnData, GetTransactionCountErrorType, selectData, GetTransactionCountQueryKey<config>>>;
export type CreateTransactionCountReturnType<selectData = GetTransactionCountData> = RuneReturnType<QueryObserverResult<selectData, GetTransactionCountErrorType>>;
export declare function createTransactionCount(parameters?: CreateTransactionCountParameters): CreateTransactionCountReturnType;

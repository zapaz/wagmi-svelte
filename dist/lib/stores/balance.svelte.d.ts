import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetBalanceErrorType } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type GetBalanceData, type GetBalanceOptions, type GetBalanceQueryFnData, type GetBalanceQueryKey } from "@wagmi/core/query";
export type CreateBalanceParameters<config extends Config = Config, selectData = GetBalanceData> = FuncOrVal<Evaluate<GetBalanceOptions<config> & ConfigParameter<config> & QueryParameter<GetBalanceQueryFnData, GetBalanceErrorType, selectData, GetBalanceQueryKey<config>>>>;
export type CreateBalanceReturnType<selectData = GetBalanceData> = RuneReturnType<QueryObserverResult<selectData, GetBalanceErrorType>>;
export declare const createBalance: <config extends Config = Config, selectData = {
    decimals: number;
    formatted: string;
    symbol: string;
    value: bigint;
}>(parameters?: CreateBalanceParameters<config, selectData>) => CreateBalanceReturnType<selectData>;

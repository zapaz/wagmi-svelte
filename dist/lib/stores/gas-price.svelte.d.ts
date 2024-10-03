import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import { type QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetGasPriceErrorType } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type GetGasPriceData, type GetGasPriceOptions, type GetGasPriceQueryFnData, type GetGasPriceQueryKey } from "@wagmi/core/query";
export type CreateGasPriceParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetGasPriceData> = FuncOrVal<Evaluate<GetGasPriceOptions<config, chainId> & ConfigParameter<config> & QueryParameter<GetGasPriceQueryFnData, GetGasPriceErrorType, selectData, GetGasPriceQueryKey<config, chainId>>>>;
export type CreateGasPriceReturnType<selectData = GetGasPriceData> = RuneReturnType<QueryObserverResult<selectData, GetGasPriceErrorType>>;
export declare const createGasPrice: <config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = bigint>(parameters?: CreateGasPriceParameters<config, chainId, selectData>) => CreateGasPriceReturnType<selectData>;

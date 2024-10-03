import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, EstimateGasErrorType } from "@wagmi/core";
import { type EstimateGasData, type EstimateGasOptions, type EstimateGasQueryFnData, type EstimateGasQueryKey } from "@wagmi/core/query";
export type CreateEstimateGasParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] | undefined = undefined, selectData = EstimateGasData> = FuncOrVal<EstimateGasOptions<config, chainId> & ConfigParameter<config> & QueryParameter<EstimateGasQueryFnData, EstimateGasErrorType, selectData, EstimateGasQueryKey<config, chainId>>>;
export type CreateEstimateGasReturnType<selectData = EstimateGasData> = RuneReturnType<QueryObserverResult<selectData, EstimateGasErrorType>>;
export declare function createEstimateGas(parameters?: CreateEstimateGasParameters): CreateEstimateGasReturnType;

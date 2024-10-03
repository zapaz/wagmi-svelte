import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import { type Config, type EstimateFeesPerGasErrorType, type ResolvedRegister } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type EstimateFeesPerGasData, type EstimateFeesPerGasOptions, type EstimateFeesPerGasQueryFnData, type EstimateFeesPerGasQueryKey } from "@wagmi/core/query";
import type { FeeValuesType } from "viem";
export type CreateEstimateFeesPerGasParameters<type extends FeeValuesType = FeeValuesType, config extends Config = Config, selectData = EstimateFeesPerGasData<type>> = FuncOrVal<Evaluate<EstimateFeesPerGasOptions<type, config> & ConfigParameter<config> & QueryParameter<EstimateFeesPerGasQueryFnData<type>, EstimateFeesPerGasErrorType, selectData, EstimateFeesPerGasQueryKey<config, type>>>>;
export type CreateEstimateFeesPerGasReturnType<type extends FeeValuesType = FeeValuesType, selectData = EstimateFeesPerGasData<type>> = RuneReturnType<QueryObserverResult<selectData, EstimateFeesPerGasErrorType>>;
export declare function createEstimateFeesPerGas<config extends Config = ResolvedRegister["config"], type extends FeeValuesType = "eip1559", selectData = EstimateFeesPerGasData<type>>(parameters?: CreateEstimateFeesPerGasParameters<type, config, selectData>): CreateEstimateFeesPerGasReturnType<type, selectData>;

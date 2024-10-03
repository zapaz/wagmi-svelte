import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import { type Config, type EstimateMaxPriorityFeePerGasErrorType, type ResolvedRegister } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type EstimateMaxPriorityFeePerGasData, type EstimateMaxPriorityFeePerGasOptions, type EstimateMaxPriorityFeePerGasQueryFnData, type EstimateMaxPriorityFeePerGasQueryKey } from "@wagmi/core/query";
export type CreateEstimateMaxPriorityFeePerGasParameters<config extends Config = Config, selectData = EstimateMaxPriorityFeePerGasData> = FuncOrVal<Evaluate<EstimateMaxPriorityFeePerGasOptions<config> & ConfigParameter<config> & QueryParameter<EstimateMaxPriorityFeePerGasQueryFnData, EstimateMaxPriorityFeePerGasErrorType, selectData, EstimateMaxPriorityFeePerGasQueryKey<config>>>>;
export type CreateEstimateMaxPriorityFeePerGasReturnType<selectData = EstimateMaxPriorityFeePerGasData> = RuneReturnType<QueryObserverResult<selectData, EstimateMaxPriorityFeePerGasErrorType>>;
export declare function createEstimateMaxPriorityFeePerGas<config extends Config = ResolvedRegister["config"], selectData = EstimateMaxPriorityFeePerGasData>(parameters?: CreateEstimateMaxPriorityFeePerGasParameters<config, selectData>): CreateEstimateMaxPriorityFeePerGasReturnType<selectData>;

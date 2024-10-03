import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetProofErrorType } from "@wagmi/core";
import { type GetProofData, type GetProofOptions, type GetProofQueryFnData, type GetProofQueryKey } from "@wagmi/core/query";
export type CreateProofParameters<config extends Config = Config, selectData = GetProofData> = FuncOrVal<GetProofOptions<config> & ConfigParameter<config> & QueryParameter<GetProofQueryFnData, GetProofErrorType, selectData, GetProofQueryKey<config>>>;
export type CreateProofReturnType<selectData = GetProofData> = RuneReturnType<QueryObserverResult<selectData, GetProofErrorType>>;
export declare function createProof(parameters?: CreateProofParameters): CreateProofReturnType;

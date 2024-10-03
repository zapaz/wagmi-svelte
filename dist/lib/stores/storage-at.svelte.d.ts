import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import { type Config, type GetStorageAtErrorType, type ResolvedRegister } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type GetStorageAtData, type GetStorageAtOptions, type GetStorageAtQueryKey } from "@wagmi/core/query";
import { type GetStorageAtQueryFnData } from "@wagmi/core/query";
export type CreatesStorageAtParameters<config extends Config = Config, selectData = GetStorageAtData> = FuncOrVal<Evaluate<GetStorageAtOptions<config> & ConfigParameter<config> & QueryParameter<GetStorageAtQueryFnData, GetStorageAtErrorType, selectData, GetStorageAtQueryKey<config>>>>;
export type CreateStorageAtReturnType<selectData = GetStorageAtData> = RuneReturnType<QueryObserverResult<selectData, GetStorageAtErrorType>>;
export declare function createStorageAt<config extends Config = ResolvedRegister["config"], selectData = GetStorageAtData>(parameters?: CreatesStorageAtParameters<config, selectData>): CreateStorageAtReturnType<selectData>;

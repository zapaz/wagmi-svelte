import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetEnsTextErrorType, ResolvedRegister } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type GetEnsTextData, type GetEnsTextOptions, type GetEnsTextQueryFnData, type GetEnsTextQueryKey } from "@wagmi/core/query";
export type CreateEnsTextParameters<config extends Config = Config, selectData = GetEnsTextData> = FuncOrVal<Evaluate<GetEnsTextOptions<config> & ConfigParameter<config> & QueryParameter<GetEnsTextQueryFnData, GetEnsTextErrorType, selectData, GetEnsTextQueryKey<config>>>>;
export type CreateEnsTextReturnType<selectData = GetEnsTextData> = RuneReturnType<QueryObserverResult<selectData, GetEnsTextErrorType>>;
export declare function createEnsText<config extends Config = ResolvedRegister["config"], selectData = GetEnsTextData>(parameters?: CreateEnsTextParameters<config, selectData>): CreateEnsTextReturnType<selectData>;

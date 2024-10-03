import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetEnsResolverErrorType, ResolvedRegister } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type GetEnsResolverData, type GetEnsResolverOptions, type GetEnsResolverQueryFnData, type GetEnsResolverQueryKey } from "@wagmi/core/query";
export type CreateEnsResolverParameters<config extends Config = Config, selectData = GetEnsResolverData> = FuncOrVal<Evaluate<GetEnsResolverOptions<config> & ConfigParameter<config> & QueryParameter<GetEnsResolverQueryFnData, GetEnsResolverErrorType, selectData, GetEnsResolverQueryKey<config>>>>;
export type CreateEnsResolverReturnType<selectData = GetEnsResolverData> = RuneReturnType<QueryObserverResult<selectData, GetEnsResolverErrorType>>;
export declare function createEnsResolver<config extends Config = ResolvedRegister["config"], selectData = GetEnsResolverData>(parameters?: CreateEnsResolverParameters<config, selectData>): CreateEnsResolverReturnType<selectData>;

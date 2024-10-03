import { type ConfigParameter, type QueryParameter, type RuneReturnType, type FuncOrVal } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetEnsNameErrorType, ResolvedRegister } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type GetEnsNameData, type GetEnsNameOptions, type GetEnsNameQueryFnData, type GetEnsNameQueryKey } from "@wagmi/core/query";
export type CreateEnsNameParameters<config extends Config = Config, selectData = GetEnsNameData> = FuncOrVal<Evaluate<GetEnsNameOptions<config> & ConfigParameter<config> & QueryParameter<GetEnsNameQueryFnData, GetEnsNameErrorType, selectData, GetEnsNameQueryKey<config>>>>;
export type CreateEnsNameReturnType<selectData = GetEnsNameData> = RuneReturnType<QueryObserverResult<selectData, GetEnsNameErrorType>>;
export declare function createEnsName<config extends Config = ResolvedRegister["config"], selectData = GetEnsNameData>(parameters?: CreateEnsNameParameters<config, selectData>): CreateEnsNameReturnType<selectData>;

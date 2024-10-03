import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetEnsAvatarErrorType, ResolvedRegister } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type GetEnsAvatarData, type GetEnsAvatarOptions, type GetEnsAvatarQueryFnData, type GetEnsAvatarQueryKey } from "@wagmi/core/query";
export type CreateEnsAvatarParameters<config extends Config = Config, selectData = GetEnsAvatarData> = FuncOrVal<Evaluate<GetEnsAvatarOptions<config> & ConfigParameter<config> & QueryParameter<GetEnsAvatarQueryFnData, GetEnsAvatarErrorType, selectData, GetEnsAvatarQueryKey<config>>>>;
export type CreateEnsAvatarReturnType<selectData = GetEnsAvatarData> = RuneReturnType<QueryObserverResult<selectData, GetEnsAvatarErrorType>>;
export declare function createEnsAvatar<config extends Config = ResolvedRegister["config"], selectData = GetEnsAvatarData>(parameters?: CreateEnsAvatarParameters<config, selectData>): CreateEnsAvatarReturnType<selectData>;

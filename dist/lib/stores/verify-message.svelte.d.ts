import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, ResolvedRegister, VerifyMessageErrorType } from "@wagmi/core";
import { type VerifyMessageData, type VerifyMessageOptions, type VerifyMessageQueryFnData, type VerifyMessageQueryKey } from "@wagmi/core/query";
export type CreateVerifyMessageParameters<config extends Config = Config, selectData = VerifyMessageData> = FuncOrVal<VerifyMessageOptions<config> & ConfigParameter<config> & QueryParameter<VerifyMessageQueryFnData, VerifyMessageErrorType, selectData, VerifyMessageQueryKey<config>>>;
export type CreateVerifyMessageReturnType<selectData = VerifyMessageData> = RuneReturnType<QueryObserverResult<selectData, VerifyMessageErrorType>>;
export declare function createVerifyMessage<config extends Config = ResolvedRegister["config"], selectData = VerifyMessageData>(parameters?: CreateVerifyMessageParameters<config, selectData>): CreateVerifyMessageReturnType<selectData>;

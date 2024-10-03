import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import { type CallErrorType, type Config, type ResolvedRegister } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import type { CallQueryFnData } from "@wagmi/core/query";
import { type CallData, type CallOptions, type CallQueryKey } from "@wagmi/core/query";
export type CreateCallParameters<config extends Config = Config, selectData = CallData> = FuncOrVal<Evaluate<CallOptions<config> & ConfigParameter<config> & QueryParameter<CallQueryFnData, CallErrorType, selectData, CallQueryKey<config>>>>;
export type CreateCallReturnType<selectData = CallData> = RuneReturnType<QueryObserverResult<selectData, CallErrorType>>;
export declare function createCall<config extends Config = ResolvedRegister["config"], selectData = CallData>(parameters?: CreateCallParameters<config, selectData>): CreateCallReturnType<selectData>;

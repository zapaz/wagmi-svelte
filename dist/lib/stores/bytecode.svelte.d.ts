import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import { type Config, type GetBytecodeErrorType, type ResolvedRegister } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type GetBytecodeData, type GetBytecodeOptions, type GetBytecodeQueryFnData, type GetBytecodeQueryKey } from "@wagmi/core/query";
export type CreateBytecodeParameters<config extends Config = Config, selectData = GetBytecodeData> = FuncOrVal<Evaluate<GetBytecodeOptions<config> & ConfigParameter<config> & QueryParameter<GetBytecodeQueryFnData, GetBytecodeErrorType, selectData, GetBytecodeQueryKey<config>>>>;
export type CreateBytecodeReturnType<selectData = GetBytecodeData> = RuneReturnType<QueryObserverResult<selectData, GetBytecodeErrorType>>;
export declare function createBytecode<config extends Config = ResolvedRegister["config"], selectData = GetBytecodeData>(parameters?: CreateBytecodeParameters<config, selectData>): CreateBytecodeReturnType<selectData>;

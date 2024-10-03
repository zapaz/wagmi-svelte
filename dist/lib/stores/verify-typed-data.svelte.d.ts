import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, ResolvedRegister, VerifyTypedDataErrorType } from "@wagmi/core";
import { type VerifyTypedDataData, type VerifyTypedDataOptions, type VerifyTypedDataQueryFnData, type VerifyTypedDataQueryKey } from "@wagmi/core/query";
import type { TypedData } from "viem";
export type CreateVerifyTypedDataParameters<typedData extends TypedData | Record<string, unknown> = TypedData, primaryType extends keyof typedData | "EIP712Domain" = keyof typedData, config extends Config = Config, selectData = VerifyTypedDataData> = FuncOrVal<VerifyTypedDataOptions<typedData, primaryType, config> & ConfigParameter<config> & QueryParameter<VerifyTypedDataQueryFnData, VerifyTypedDataErrorType, selectData, VerifyTypedDataQueryKey<typedData, primaryType, config>>>;
export type CreateVerifyTypedDataReturnType<selectData = VerifyTypedDataData> = RuneReturnType<QueryObserverResult<selectData, VerifyTypedDataErrorType>>;
export declare function createVerifyTypedData<const typedData extends TypedData | Record<string, unknown>, primaryType extends keyof typedData | "EIP712Domain", config extends Config = ResolvedRegister["config"], selectData = VerifyTypedDataData>(parameters?: CreateVerifyTypedDataParameters<typedData, primaryType, config, selectData>): CreateVerifyTypedDataReturnType<selectData>;

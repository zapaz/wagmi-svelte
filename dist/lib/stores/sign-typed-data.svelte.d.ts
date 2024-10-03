import type { CreateMutationParameters } from "../query";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type MutationObserverResult } from "@tanstack/svelte-query";
import type { SignTypedDataErrorType } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type SignTypedDataData, type SignTypedDataMutate, type SignTypedDataMutateAsync, type SignTypedDataVariables } from "@wagmi/core/query";
export type CreateSignTypedDataParameters<context = unknown> = FuncOrVal<Evaluate<ConfigParameter & {
    mutation?: CreateMutationParameters<SignTypedDataData, SignTypedDataErrorType, SignTypedDataVariables, context> | undefined;
}>>;
export type CreateSignTypedDataReturnType<context = unknown> = RuneReturnType<Evaluate<MutationObserverResult<SignTypedDataData, SignTypedDataErrorType, SignTypedDataVariables, context> & {
    signTypedData: SignTypedDataMutate<context>;
    signTypedDataAsync: SignTypedDataMutateAsync<context>;
}>>;
export declare function createSignTypedData<context = unknown>(parameters?: CreateSignTypedDataParameters<context>): CreateSignTypedDataReturnType<context>;

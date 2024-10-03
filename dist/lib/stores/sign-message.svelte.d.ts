import type { CreateMutationParameters } from "../query";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type MutationObserverResult } from "@tanstack/svelte-query";
import { type SignMessageErrorType } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type SignMessageData, type SignMessageMutate, type SignMessageMutateAsync, type SignMessageVariables } from "@wagmi/core/query";
export type CreateSignMessageParameters<context = unknown> = FuncOrVal<Evaluate<ConfigParameter & {
    mutation?: CreateMutationParameters<SignMessageData, SignMessageErrorType, SignMessageVariables, context> | undefined;
}>>;
export type CreateSignMessageReturnType<context = unknown> = RuneReturnType<Evaluate<MutationObserverResult<SignMessageData, SignMessageErrorType, SignMessageVariables, context> & {
    signMessage: SignMessageMutate<context>;
    signMessageAsync: SignMessageMutateAsync<context>;
}>>;
export declare function createSignMessage<context = unknown>(parameters?: CreateSignMessageParameters<context>): CreateSignMessageReturnType<context>;

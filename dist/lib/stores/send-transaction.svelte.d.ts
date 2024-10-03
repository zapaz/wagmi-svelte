import type { CreateMutationParameters } from "../query";
import { type ConfigParameter, type RuneReturnType, type FuncOrVal } from "../types";
import { type MutationObserverResult } from "@tanstack/svelte-query";
import type { Config, ResolvedRegister, SendTransactionErrorType } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type SendTransactionData, type SendTransactionMutate, type SendTransactionMutateAsync, type SendTransactionVariables } from "@wagmi/core/query";
export type UseSendTransactionParameters<config extends Config = Config, context = unknown> = FuncOrVal<Evaluate<ConfigParameter<config> & {
    mutation?: CreateMutationParameters<SendTransactionData, SendTransactionErrorType, SendTransactionVariables<config, config["chains"][number]["id"]>, context> | undefined;
}>>;
export type CreateSendTransactionReturnType<config extends Config = Config, context = unknown> = RuneReturnType<Evaluate<MutationObserverResult<SendTransactionData, SendTransactionErrorType, SendTransactionVariables<config, config["chains"][number]["id"]>, context> & {
    sendTransaction: SendTransactionMutate<config, context>;
    sendTransactionAsync: SendTransactionMutateAsync<config, context>;
}>>;
export declare function createSendTransaction<config extends Config = ResolvedRegister["config"], context = unknown>(parameters?: UseSendTransactionParameters<config, context>): CreateSendTransactionReturnType<config, context>;

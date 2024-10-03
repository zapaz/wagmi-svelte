import type { CreateMutationParameters } from "../query";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type MutationObserverResult } from "@tanstack/svelte-query";
import { type Connector, type ReconnectErrorType } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type ReconnectData, type ReconnectMutate, type ReconnectMutateAsync, type ReconnectVariables } from "@wagmi/core/query";
export type CreateReconnectParameters<context = unknown> = FuncOrVal<Evaluate<ConfigParameter & {
    mutation?: CreateMutationParameters<ReconnectData, ReconnectErrorType, ReconnectVariables, context> | undefined;
}>>;
export type CreateReconnectReturnType<context = unknown> = RuneReturnType<Evaluate<MutationObserverResult<ReconnectData, ReconnectErrorType, ReconnectVariables, context> & {
    connectors: readonly Connector[];
    reconnect: ReconnectMutate<context>;
    reconnectAsync: ReconnectMutateAsync<context>;
}>>;
export declare function createReconnect<context = unknown>(parameters?: CreateReconnectParameters<context>): CreateReconnectReturnType<context>;

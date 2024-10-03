import type { CreateMutationParameters } from "../query";
import { type ConfigParameter, type RuneReturnType, type FuncOrVal } from "../types";
import { type MutationObserverResult } from "@tanstack/svelte-query";
import { type Connector, type DisconnectErrorType } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type DisconnectData, type DisconnectMutate, type DisconnectMutateAsync, type DisconnectVariables } from "@wagmi/core/query";
export type CreateDisconnectParameters<context = unknown> = FuncOrVal<Evaluate<ConfigParameter & {
    mutation?: CreateMutationParameters<DisconnectData, DisconnectErrorType, DisconnectVariables, context> | undefined;
}>>;
export type CreateDisconnectReturnType<context = unknown> = RuneReturnType<Evaluate<MutationObserverResult<DisconnectData, DisconnectErrorType, DisconnectVariables, context> & {
    connectors: readonly Connector[];
    disconnect: DisconnectMutate<context>;
    disconnectAsync: DisconnectMutateAsync<context>;
}>>;
export declare function createDisconnect<context = unknown>(parameters?: CreateDisconnectParameters<context>): CreateDisconnectReturnType<context>;

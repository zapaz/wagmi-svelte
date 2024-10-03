import type { CreateMutationParameters } from "../query";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type MutationObserverResult } from "@tanstack/svelte-query";
import type { Config, ConnectErrorType, Connector, ResolvedRegister } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type ConnectData, type ConnectMutate, type ConnectMutateAsync, type ConnectVariables } from "@wagmi/core/query";
export type CreateConnectParameters<config extends Config = Config, context = unknown> = FuncOrVal<Evaluate<ConfigParameter<config> & {
    mutation?: CreateMutationParameters<ConnectData<config>, ConnectErrorType, ConnectVariables<config>, context> | undefined;
}>>;
export type CreateConnectReturnType<config extends Config = Config, context = unknown> = RuneReturnType<Evaluate<MutationObserverResult<ConnectData<config>, ConnectErrorType, ConnectVariables<config>, context> & {
    connect: ConnectMutate<config, context>;
    connectAsync: ConnectMutateAsync<config, context>;
    connectors: readonly Connector[];
}>>;
export declare function createConnect<config extends Config = ResolvedRegister["config"], context = unknown>(parameters?: CreateConnectParameters<config, context>): CreateConnectReturnType<config, context>;

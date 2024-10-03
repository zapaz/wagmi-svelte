import type { CreateMutationParameters } from "../query";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type MutationObserverResult } from "@tanstack/svelte-query";
import type { Config, Connector, ResolvedRegister, SwitchAccountErrorType } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
import { type SwitchAccountData, type SwitchAccountMutate, type SwitchAccountMutateAsync, type SwitchAccountVariables } from "@wagmi/core/query";
export type CreateSwitchAccountParameters<config extends Config = Config, context = unknown> = FuncOrVal<Evaluate<ConfigParameter<config> & {
    mutation?: CreateMutationParameters<SwitchAccountData<config>, SwitchAccountErrorType, SwitchAccountVariables, context> | undefined;
}>>;
export type CreateSwitchAccountReturnType<config extends Config = Config, context = unknown> = RuneReturnType<Evaluate<MutationObserverResult<SwitchAccountData<config>, SwitchAccountErrorType, SwitchAccountVariables, context> & {
    connectors: readonly Connector[];
    switchAccount: SwitchAccountMutate<config, context>;
    switchAccountAsync: SwitchAccountMutateAsync<config, context>;
}>>;
export declare function createSwitchAccount<config extends Config = ResolvedRegister["config"], context = unknown>(parameters?: CreateSwitchAccountParameters<config, context>): CreateSwitchAccountReturnType<config, context>;

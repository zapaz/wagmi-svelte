import type { CreateMutationParameters } from "../query";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type MutationObserverResult } from "@tanstack/svelte-query";
import { type Config, type GetChainsReturnType, type ResolvedRegister, type SwitchChainErrorType } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type SwitchChainData, type SwitchChainMutate, type SwitchChainMutateAsync, type SwitchChainVariables } from "@wagmi/core/query";
export type CreateSwitchChainParameters<config extends Config = Config, context = unknown> = FuncOrVal<Evaluate<ConfigParameter<config> & {
    mutation?: CreateMutationParameters<SwitchChainData<config, config["chains"][number]["id"]>, SwitchChainErrorType, SwitchChainVariables<config, config["chains"][number]["id"]>, context> | undefined;
}>>;
export type CreateSwitchChainReturnType<config extends Config = Config, context = unknown> = RuneReturnType<Evaluate<MutationObserverResult<SwitchChainData<config, config["chains"][number]["id"]>, SwitchChainErrorType, SwitchChainVariables<config, config["chains"][number]["id"]>, context> & {
    chains: Evaluate<GetChainsReturnType<config>>;
    switchChain: SwitchChainMutate<config, context>;
    switchChainAsync: SwitchChainMutateAsync<config, context>;
}>>;
export declare function createSwitchChain<config extends Config = ResolvedRegister["config"], context = unknown>(parameters?: CreateSwitchChainParameters<config, context>): CreateSwitchChainReturnType<config, context>;

import type { CreateMutationParameters } from "../query";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type MutationObserverResult } from "@tanstack/svelte-query";
import type { Config, ResolvedRegister, WriteContractErrorType } from "@wagmi/core";
import { type WriteContractData, type WriteContractMutate, type WriteContractMutateAsync, type WriteContractVariables } from "@wagmi/core/query";
import type { Abi } from "viem";
export type CreateWriteContractParameters<config extends Config = Config, context = unknown> = FuncOrVal<ConfigParameter<config> & {
    mutation?: CreateMutationParameters<WriteContractData, WriteContractErrorType, WriteContractVariables<Abi, string, readonly unknown[], config, config["chains"][number]["id"]>, context> | undefined;
}>;
export type CreateWriteContractReturnType<config extends Config = Config, context = unknown> = RuneReturnType<MutationObserverResult<WriteContractData, WriteContractErrorType, WriteContractVariables<Abi, string, readonly unknown[], config, config["chains"][number]["id"]>, context> & {
    writeContract: WriteContractMutate<config, context>;
    writeContractAsync: WriteContractMutateAsync<config, context>;
}>;
export declare function createWriteContract<config extends Config = ResolvedRegister["config"], context = unknown>(parameters?: CreateWriteContractParameters<config, context>): CreateWriteContractReturnType<config, context>;

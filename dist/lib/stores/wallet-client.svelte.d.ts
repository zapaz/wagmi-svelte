import { type CreateQueryParameters } from "../query";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetWalletClientErrorType, ResolvedRegister } from "@wagmi/core";
import { type GetWalletClientData, type GetWalletClientOptions, type GetWalletClientQueryFnData, type GetWalletClientQueryKey } from "@wagmi/core/query";
import type { Evaluate } from "@wagmi/core/internal";
export type CreateWalletClientParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetWalletClientData<config, chainId>> = FuncOrVal<Evaluate<GetWalletClientOptions<config, chainId> & ConfigParameter<config> & {
    query?: Evaluate<Omit<CreateQueryParameters<GetWalletClientQueryFnData<config, chainId>, GetWalletClientErrorType, selectData, GetWalletClientQueryKey<config, chainId>>, "gcTime" | "staleTime">> | undefined;
}>>;
export type CreateWalletClientReturnType<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetWalletClientData<config, chainId>> = RuneReturnType<QueryObserverResult<selectData, GetWalletClientErrorType>>;
export declare function createWalletClient<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetWalletClientData<config, chainId>>(parameters?: CreateWalletClientParameters<config, chainId, selectData>): CreateWalletClientReturnType<config, chainId, selectData>;

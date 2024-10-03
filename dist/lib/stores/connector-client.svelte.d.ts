import { type CreateQueryParameters } from "../query";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetConnectorClientErrorType, ResolvedRegister } from "@wagmi/core";
import { type Evaluate, type Omit } from "@wagmi/core/internal";
import { type GetConnectorClientData, type GetConnectorClientOptions, type GetConnectorClientQueryFnData, type GetConnectorClientQueryKey } from "@wagmi/core/query";
export type CreateConnectorClientParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetConnectorClientData<config, chainId>> = FuncOrVal<Evaluate<GetConnectorClientOptions<config, chainId> & ConfigParameter<config> & {
    query?: Evaluate<Omit<CreateQueryParameters<GetConnectorClientQueryFnData<config, chainId>, GetConnectorClientErrorType, selectData, GetConnectorClientQueryKey<config, chainId>>, "gcTime" | "staleTime">> | undefined;
}>>;
export type CreateConnectorClientReturnType<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetConnectorClientData<config, chainId>> = RuneReturnType<QueryObserverResult<selectData, GetConnectorClientErrorType>>;
export declare function createConnectorClient<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetConnectorClientData<config, chainId>>(parameters?: CreateConnectorClientParameters<config, chainId, selectData>): CreateConnectorClientReturnType<config, chainId, selectData>;

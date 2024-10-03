import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetTransactionErrorType, ResolvedRegister } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type GetTransactionData, type GetTransactionOptions, type GetTransactionQueryFnData, type GetTransactionQueryKey } from "@wagmi/core/query";
export type CreateTransactionParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetTransactionData<config, chainId>> = FuncOrVal<Evaluate<GetTransactionOptions<config, chainId> & ConfigParameter<config> & QueryParameter<GetTransactionQueryFnData<config, chainId>, GetTransactionErrorType, selectData, GetTransactionQueryKey<config, chainId>>>>;
export type CreateTransactionReturnType<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetTransactionData<config, chainId>> = RuneReturnType<QueryObserverResult<selectData, GetTransactionErrorType>>;
export declare function createTransaction<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetTransactionData<config, chainId>>(parameters?: CreateTransactionParameters<config, chainId, selectData>): CreateTransactionReturnType<config, chainId, selectData>;

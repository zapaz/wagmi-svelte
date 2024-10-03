import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import type { Config, GetTransactionReceiptErrorType, ResolvedRegister } from "@wagmi/core";
import { type GetTransactionReceiptData, type GetTransactionReceiptOptions, type GetTransactionReceiptQueryFnData, type GetTransactionReceiptQueryKey } from "@wagmi/core/query";
export type CreateTransactionReceiptParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetTransactionReceiptData<config, chainId>> = FuncOrVal<GetTransactionReceiptOptions<config, chainId> & ConfigParameter<config> & QueryParameter<GetTransactionReceiptQueryFnData<config, chainId>, GetTransactionReceiptErrorType, selectData, GetTransactionReceiptQueryKey<config, chainId>>>;
export type CreateTransactionReceiptReturnType<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetTransactionReceiptData<config, chainId>> = RuneReturnType<QueryObserverResult<selectData, GetTransactionReceiptErrorType>>;
export declare function createTransactionReceipt<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetTransactionReceiptData<config, chainId>>(parameters?: CreateTransactionReceiptParameters<config, chainId, selectData>): CreateTransactionReceiptReturnType<config, chainId, selectData>;

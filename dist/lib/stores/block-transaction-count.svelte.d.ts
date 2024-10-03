import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import { type Config, type GetBlockTransactionCountErrorType, type ResolvedRegister } from "@wagmi/core";
import { type UnionEvaluate } from "@wagmi/core/internal";
import { type GetBlockTransactionCountData, type GetBlockTransactionCountOptions, type GetBlockTransactionCountQueryFnData, type GetBlockTransactionCountQueryKey } from "@wagmi/core/query";
export type CreateBlockTransactionCountParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetBlockTransactionCountData> = FuncOrVal<UnionEvaluate<GetBlockTransactionCountOptions<config, chainId> & ConfigParameter<config> & QueryParameter<GetBlockTransactionCountQueryFnData, GetBlockTransactionCountErrorType, selectData, GetBlockTransactionCountQueryKey<config, chainId>>>>;
export type CreateBlockTransactionCountReturnType<selectData = GetBlockTransactionCountData> = RuneReturnType<QueryObserverResult<selectData, GetBlockTransactionCountErrorType>>;
export declare function createBlockTransactionCount<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetBlockTransactionCountData>(parameters?: CreateBlockTransactionCountParameters<config, chainId, selectData>): CreateBlockTransactionCountReturnType<selectData>;

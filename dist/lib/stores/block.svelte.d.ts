import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import { type QueryObserverResult } from "@tanstack/svelte-query";
import { type Config, type GetBlockErrorType, type ResolvedRegister } from "@wagmi/core";
import { type Evaluate, type UnionEvaluate, type UnionOmit } from "@wagmi/core/internal";
import { type GetBlockData, type GetBlockOptions, type GetBlockQueryFnData, type GetBlockQueryKey } from "@wagmi/core/query";
import type { BlockTag } from "viem";
import { type CreateWatchBlocksParameters } from "./watch-blocks.svelte";
export type CreateBlockParameters<includeTransactions extends boolean = false, blockTag extends BlockTag = "latest", config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetBlockData<includeTransactions, blockTag, config, chainId>> = FuncOrVal<Evaluate<GetBlockOptions<includeTransactions, blockTag, config, chainId> & ConfigParameter<config> & QueryParameter<GetBlockQueryFnData<includeTransactions, blockTag, config, chainId>, GetBlockErrorType, selectData, GetBlockQueryKey<includeTransactions, blockTag, config, chainId>> & {
    watch?: boolean | UnionEvaluate<UnionOmit<CreateWatchBlocksParameters<includeTransactions, blockTag, config, chainId>, "chainId" | "config" | "onBlock" | "onError">> | undefined;
}>>;
export type CreateBlockReturnType<includeTransactions extends boolean = false, blockTag extends BlockTag = "latest", config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetBlockData<includeTransactions, blockTag, config, chainId>> = RuneReturnType<QueryObserverResult<selectData, GetBlockErrorType>>;
export declare function createBlock<includeTransactions extends boolean = false, blockTag extends BlockTag = "latest", config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetBlockData<includeTransactions, blockTag, config, chainId>>(parameters?: CreateBlockParameters<includeTransactions, blockTag, config, chainId, selectData>): CreateBlockReturnType<includeTransactions, blockTag, config, chainId, selectData>;

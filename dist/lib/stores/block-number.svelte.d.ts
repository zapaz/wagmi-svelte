import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import { type QueryObserverResult } from "@tanstack/svelte-query";
import { type Config, type GetBlockNumberErrorType, type ResolvedRegister } from "@wagmi/core";
import { type Evaluate, type UnionEvaluate, type UnionOmit } from "@wagmi/core/internal";
import { type GetBlockNumberData, type GetBlockNumberOptions, type GetBlockNumberQueryFnData, type GetBlockNumberQueryKey } from "@wagmi/core/query";
import { type CreateWatchBlockNumberParameters } from "./watch-block-number.svelte";
export type CreateBlockNumberParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetBlockNumberData> = FuncOrVal<Evaluate<GetBlockNumberOptions<config, chainId> & ConfigParameter<config> & QueryParameter<GetBlockNumberQueryFnData, GetBlockNumberErrorType, selectData, GetBlockNumberQueryKey<config, chainId>> & {
    watch?: boolean | UnionEvaluate<UnionOmit<CreateWatchBlockNumberParameters<config, chainId>, "chainId" | "config" | "onBlockNumber" | "onError">> | undefined;
}>>;
export type CreateBlockNumberReturnType<selectData = GetBlockNumberData> = RuneReturnType<QueryObserverResult<selectData, GetBlockNumberErrorType>>;
export declare function createBlockNumber<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], selectData = GetBlockNumberData>(parameters?: CreateBlockNumberParameters<config, chainId, selectData>): CreateBlockNumberReturnType<selectData>;

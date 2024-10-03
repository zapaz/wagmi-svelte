import { type ConfigParameter, type EnabledParameter, type FuncOrVal } from "../types";
import { type Config, type ResolvedRegister, type WatchBlocksParameters } from "@wagmi/core";
import { type UnionEvaluate, type UnionPartial } from "@wagmi/core/internal";
import type { BlockTag } from "viem";
export type CreateWatchBlocksParameters<includeTransactions extends boolean = false, blockTag extends BlockTag = "latest", config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"]> = FuncOrVal<UnionEvaluate<UnionPartial<WatchBlocksParameters<includeTransactions, blockTag, config, chainId>> & ConfigParameter<config> & EnabledParameter>>;
export type CreateWatchBlocksReturnType = void;
export declare function createWatchBlocks<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"], includeTransactions extends boolean = false, blockTag extends BlockTag = "latest">(parameters?: CreateWatchBlocksParameters<includeTransactions, blockTag, config, chainId>): CreateWatchBlocksReturnType;

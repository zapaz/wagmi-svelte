import { type ConfigParameter, type EnabledParameter, type FuncOrVal } from "../types";
import { type Config, type ResolvedRegister, type WatchBlockNumberParameters } from "@wagmi/core";
import { type UnionEvaluate, type UnionPartial } from "@wagmi/core/internal";
export type CreateWatchBlockNumberParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"]> = FuncOrVal<UnionEvaluate<UnionPartial<WatchBlockNumberParameters<config, chainId>> & ConfigParameter<config> & EnabledParameter>>;
export type CreateWatchBlockNumberReturnType = void;
export declare function createWatchBlockNumber<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"]>(parameters?: CreateWatchBlockNumberParameters<config, chainId>): CreateWatchBlockNumberReturnType;

import { type ConfigParameter, type EnabledParameter, type FuncOrVal } from "../types";
import { type Config, type ResolvedRegister, type WatchPendingTransactionsParameters } from "@wagmi/core";
import { type UnionEvaluate, type UnionPartial } from "@wagmi/core/internal";
export type CreateWatchPendingTransactionsParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"]> = FuncOrVal<UnionEvaluate<UnionPartial<WatchPendingTransactionsParameters<config, chainId>> & ConfigParameter<config> & EnabledParameter>>;
export type CreateWatchPendingTransactionsReturnType = void;
export declare function createWatchPendingTransactions<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"]>(parameters?: CreateWatchPendingTransactionsParameters<config, chainId>): CreateWatchPendingTransactionsReturnType;

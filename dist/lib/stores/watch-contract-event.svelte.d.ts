import { type ConfigParameter, type EnabledParameter, type FuncOrVal } from "../types";
import { type Config, type ResolvedRegister, type WatchContractEventParameters } from "@wagmi/core";
import { type UnionEvaluate, type UnionPartial } from "@wagmi/core/internal";
import type { Abi, ContractEventName } from "viem";
export type CreateWatchContractEventParameters<abi extends Abi | readonly unknown[] = Abi, eventName extends ContractEventName<abi> = ContractEventName<abi>, strict extends boolean | undefined = undefined, config extends Config = Config, chainId extends config["chains"][number]["id"] = config["chains"][number]["id"]> = FuncOrVal<UnionEvaluate<UnionPartial<WatchContractEventParameters<abi, eventName, strict, config, chainId>> & ConfigParameter<config> & EnabledParameter>>;
export type CreateWatchContractEventReturnType = void;
export declare function createWatchContractEvent<const abi extends Abi | readonly unknown[], eventName extends ContractEventName<abi>, strict extends boolean | undefined = undefined, config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] = config["chains"][number]["id"]>(parameters?: CreateWatchContractEventParameters<abi, eventName, strict, config, chainId>): CreateWatchContractEventReturnType;

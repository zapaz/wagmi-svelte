import type { ConfigParameter, FuncOrVal, RuneReturnType } from "../types";
import { type Config, type GetChainsReturnType, type ResolvedRegister } from "@wagmi/core";
export type CreateChainsParameters<config extends Config = Config> = FuncOrVal<ConfigParameter<config>>;
export type CreateChainsReturnType<config extends Config = Config> = RuneReturnType<GetChainsReturnType<config>>;
export declare function createChains<config extends Config = ResolvedRegister["config"]>(parameters?: CreateChainsParameters<config>): CreateChainsReturnType<config>;

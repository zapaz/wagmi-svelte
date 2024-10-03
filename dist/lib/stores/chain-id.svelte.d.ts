import type { ConfigParameter, FuncOrVal, RuneReturnType } from "../types";
import { type Config, type GetChainIdReturnType } from "@wagmi/core";
export type CreateChainIdParameters<config extends Config = Config> = FuncOrVal<ConfigParameter<config>>;
export type CreateChainIdReturnType<config extends Config = Config> = RuneReturnType<GetChainIdReturnType<config>>;
export declare const createChainId: <config extends Config = Config>(parameters?: CreateChainIdParameters<config>) => CreateChainIdReturnType;

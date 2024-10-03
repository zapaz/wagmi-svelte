import type { Config } from "@wagmi/core";
import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
export type CreateConfigParameters<config extends Config = Config> = FuncOrVal<ConfigParameter<config>>;
export type CreateConfigReturnType<config extends Config = Config> = RuneReturnType<config>;
export declare const createConfig: <config extends Config = Config>(parameters?: CreateConfigParameters<config>) => CreateConfigReturnType;

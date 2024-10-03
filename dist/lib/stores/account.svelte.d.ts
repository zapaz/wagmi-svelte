import type { ConfigParameter, FuncOrVal, RuneReturnType } from "../types";
import { type Config, type GetAccountReturnType, type ResolvedRegister } from "@wagmi/core";
export type CreateAccountParameters<config extends Config = Config> = FuncOrVal<ConfigParameter<config>>;
export type CreateAccountReturnType<config extends Config = Config> = RuneReturnType<GetAccountReturnType<config>>;
export declare function createAccount<config extends Config = ResolvedRegister["config"]>(parameters?: CreateAccountParameters<config>): CreateAccountReturnType<config>;

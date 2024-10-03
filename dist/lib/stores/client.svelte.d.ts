import type { ConfigParameter, FuncOrVal, RuneReturnType } from "../types";
import { type Config, type GetClientParameters, type GetClientReturnType, type ResolvedRegister } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
export type CreateClientParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] | number | undefined = config["chains"][number]["id"] | undefined> = FuncOrVal<Evaluate<GetClientParameters<config, chainId> & ConfigParameter<config>>>;
export type CreateClientReturnType<config extends Config = Config, chainId extends config["chains"][number]["id"] | number | undefined = config["chains"][number]["id"] | undefined> = RuneReturnType<GetClientReturnType<config, chainId>>;
export declare function createClient<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] | number | undefined = config["chains"][number]["id"] | undefined>(parameters?: CreateClientParameters<config, chainId>): CreateClientReturnType<config, chainId>;

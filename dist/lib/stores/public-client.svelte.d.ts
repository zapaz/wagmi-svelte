import { type ConfigParameter, type FuncOrVal, type RuneReturnType } from "../types";
import { type Config, type GetPublicClientParameters, type GetPublicClientReturnType, type ResolvedRegister } from "@wagmi/core";
import type { Evaluate } from "@wagmi/core/internal";
export type CreatePublicClientParameters<config extends Config = Config, chainId extends config["chains"][number]["id"] | number = config["chains"][number]["id"]> = FuncOrVal<Evaluate<GetPublicClientParameters<config, chainId> & ConfigParameter<config>>>;
export type CreatePublicClientReturnType<config extends Config = Config, chainId extends config["chains"][number]["id"] | number = config["chains"][number]["id"]> = RuneReturnType<GetPublicClientReturnType<config, chainId> | undefined>;
export declare function createPublicClient<config extends Config = ResolvedRegister["config"], chainId extends config["chains"][number]["id"] | number = config["chains"][number]["id"]>(parameters?: CreatePublicClientParameters<config, chainId>): CreatePublicClientReturnType<config, chainId>;

import { type ConfigParameter, type FuncOrVal, type QueryParameter, type RuneReturnType } from "../types";
import type { QueryObserverResult } from "@tanstack/svelte-query";
import { type Config, type ReadContractsErrorType, type ResolvedRegister } from "@wagmi/core";
import { type Evaluate } from "@wagmi/core/internal";
import { type ReadContractsData, type ReadContractsOptions, type ReadContractsQueryFnData, type ReadContractsQueryKey } from "@wagmi/core/query";
import { type ContractFunctionParameters } from "viem";
export type CreateReadContractsParameters<contracts extends readonly unknown[] = readonly ContractFunctionParameters[], allowFailure extends boolean = true, config extends Config = Config, selectData = ReadContractsData<contracts, allowFailure>> = FuncOrVal<Evaluate<ReadContractsOptions<contracts, allowFailure, config> & ConfigParameter<config> & QueryParameter<ReadContractsQueryFnData<contracts, allowFailure>, ReadContractsErrorType, selectData, ReadContractsQueryKey<contracts, allowFailure, config>>>>;
export type CreateReadContractsReturnType<contracts extends readonly unknown[] = readonly ContractFunctionParameters[], allowFailure extends boolean = true, selectData = ReadContractsData<contracts, allowFailure>> = RuneReturnType<QueryObserverResult<selectData, ReadContractsErrorType>>;
export declare function createReadContracts<const contracts extends readonly unknown[], allowFailure extends boolean = true, config extends Config = ResolvedRegister["config"], selectData = ReadContractsData<contracts, allowFailure>>(parameters?: CreateReadContractsParameters<contracts, allowFailure, config, selectData>): CreateReadContractsReturnType<contracts, allowFailure, selectData>;

import { type CreateInfiniteQueryOptions, type CreateInfiniteQueryResult, type CreateMutationOptions, type CreateQueryOptions, type DefaultError, type MutationObserverResult, type QueryKey, type QueryObserverResult, type StoreOrVal } from "@tanstack/svelte-query";
import { type Evaluate, type ExactPartial, type Omit } from "@wagmi/core/internal";
import { type Readable } from "svelte/store";
export type CreateMutationParameters<data = unknown, error = Error, variables = void, context = unknown> = CreateMutationOptions<data, error, Evaluate<variables>, context> extends Readable<infer T> ? Readable<Omit<T, "mutationFn" | "mutationKey" | "throwOnError">> : Omit<CreateMutationOptions<data, error, Evaluate<variables>, context>, "mutationFn" | "mutationKey" | "throwOnError">;
export type CreateMutationReturnType<data = unknown, error = Error, variables = void, context = unknown> = Evaluate<Omit<MutationObserverResult<data, error, variables, context>, "mutate">>;
export type CreateQueryParameters<queryFnData = unknown, error = DefaultError, data = queryFnData, queryKey extends QueryKey = QueryKey> = Evaluate<ExactPartial<Omit<CreateQueryOptions<queryFnData, error, data, queryKey>, "initialData">> & {
    initialData?: CreateQueryOptions<queryFnData, error, data, queryKey>["initialData"] | undefined;
}>;
export type CreateQueryReturnType<data = unknown, error = DefaultError> = Evaluate<Readable<QueryObserverResult<data, error> & {
    queryKey: QueryKey;
}>>;
export declare function createQuery<queryFnData, error, data, queryKey extends QueryKey>(parameters: StoreOrVal<CreateQueryParameters<queryFnData, error, data, queryKey> & {
    queryKey: QueryKey;
}>): CreateQueryReturnType<data, error>;
export type CreateInfiniteQueryParameters<queryFnData = unknown, error = DefaultError, data = queryFnData, queryData = queryFnData, queryKey extends QueryKey = QueryKey, pageParam = unknown> = Evaluate<Omit<CreateInfiniteQueryOptions<queryFnData, error, data, queryData, queryKey, pageParam>, "initialData"> & {
    initialData?: CreateInfiniteQueryOptions<queryFnData, error, data, queryKey>["initialData"] | undefined;
}>;
export type CreateInfiniteQueryReturnType<data = unknown, error = DefaultError> = CreateInfiniteQueryResult<data, error> & {
    queryKey: QueryKey;
};
export declare function createInfiniteQuery<queryFnData, error, data, queryKey extends QueryKey>(parameters: StoreOrVal<CreateInfiniteQueryParameters<queryFnData, error, data, queryKey> & {
    queryKey: QueryKey;
}>): CreateInfiniteQueryReturnType<data, error>;
export declare function structuralSharing<data>(oldData: data | undefined, newData: data): data;

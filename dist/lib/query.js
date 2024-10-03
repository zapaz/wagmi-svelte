import { replaceEqualDeep, createInfiniteQuery as tanstack_createInfiniteQuery, createQuery as tanstack_createQuery, } from "@tanstack/svelte-query";
import { deepEqual } from "@wagmi/core/internal";
import { hashFn } from "@wagmi/core/query";
import { derived, get } from "svelte/store";
// Adding some basic customization.
// Ideally we don't have this function, but `import('@tanstack/svelte-query').createQuery` currently has some quirks where it is super hard to
// pass down the inferred `initialData` type because of it's discriminated overload in the on `createQuery`.
export function createQuery(parameters) {
    // check if `parameters` is a store
    if ("subscribe" in parameters) {
        const result = tanstack_createQuery(derived(parameters, ($parameters) => {
            return {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ...$parameters,
                queryKeyHashFn: hashFn, // for bigint support
            };
        }));
        return derived(result, (data) => ({ ...data, queryKey: get(parameters).queryKey }));
    }
    const result = tanstack_createQuery({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...parameters,
        queryKeyHashFn: hashFn, // for bigint support
    });
    return derived(result, (data) => ({ ...data, queryKey: parameters.queryKey }));
}
// Adding some basic customization.
export function createInfiniteQuery(parameters) {
    const result = tanstack_createInfiniteQuery({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...parameters,
        queryKeyHashFn: hashFn, // for bigint support
    });
    result.queryKey = parameters.queryKey;
    return result;
}
////////////////////////////////////////////////////////////////////////////////
export function structuralSharing(oldData, newData) {
    if (deepEqual(oldData, newData))
        return oldData;
    return replaceEqualDeep(oldData, newData);
}

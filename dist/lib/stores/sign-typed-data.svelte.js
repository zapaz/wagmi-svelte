import { resolveVal } from "../types";
import { createMutation } from "@tanstack/svelte-query";
import { signTypedDataMutationOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createSignTypedData(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { mutation } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const mutationOptions = $derived(signTypedDataMutationOptions(config));
    const store = createMutation(runeToStore(() => ({
        ...mutation,
        ...mutationOptions,
    })));
    const mutateResult = $derived.by(storeToRune(store));
    return () => ({
        ...mutateResult,
        mutate: mutateResult.mutate,
        signTypedData: mutateResult.mutate,
        signTypedDataAsync: mutateResult.mutateAsync,
    });
}

import { resolveVal } from "../types";
import { createMutation } from "@tanstack/svelte-query";
import {} from "@wagmi/core";
import { signMessageMutationOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createSignMessage(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { mutation } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const mutationOptions = $derived(signMessageMutationOptions(config));
    const store = createMutation(runeToStore(() => ({
        ...mutation,
        ...mutationOptions,
    })));
    const mutateResult = $derived.by(storeToRune(store));
    return () => ({
        ...mutateResult,
        mutate: mutateResult.mutate,
        signMessage: mutateResult.mutate,
        signMessageAsync: mutateResult.mutateAsync,
    });
}

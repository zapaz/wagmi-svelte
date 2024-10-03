import { resolveVal } from "../types";
import { createMutation } from "@tanstack/svelte-query";
import {} from "@wagmi/core";
import { reconnectMutationOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createReconnect(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { mutation } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const mutationOptions = $derived(reconnectMutationOptions(config));
    const store = createMutation(runeToStore(() => ({
        ...mutation,
        ...mutationOptions,
    })));
    const mutateResult = $derived.by(storeToRune(store));
    const result = $derived({
        ...mutateResult,
        mutate: mutateResult.mutate,
        reconnect: mutateResult.mutate,
        reconnectAsync: mutateResult.mutateAsync,
        connectors: config.connectors,
    });
    return () => result;
}

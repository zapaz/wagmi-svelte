import { resolveVal } from "../types";
import { createMutation } from "@tanstack/svelte-query";
import {} from "@wagmi/core";
import { disconnectMutationOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { runeToStore, storeToRune } from "../runes.svelte";
import { createConnections } from "./connections.svelte";
export function createDisconnect(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { mutation } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const connections = $derived.by(createConnections({ config }));
    const mutationOptions = disconnectMutationOptions(config);
    const store = createMutation(runeToStore(() => ({
        ...mutation,
        ...mutationOptions,
    })));
    const mutateResult = $derived.by(storeToRune(store));
    const result = $derived({
        ...mutateResult,
        mutate: mutateResult.mutate,
        disconnect: mutateResult.mutate,
        disconnectAsync: mutateResult.mutateAsync,
        connectors: connections.map((connection) => connection.connector),
    });
    return () => result;
}

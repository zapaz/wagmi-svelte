import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal } from "../types";
import { createMutation } from "@tanstack/svelte-query";
import { connectMutationOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { createConnectors } from "./connectors.svelte";
export function createConnect(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { mutation } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const connectors = $derived.by(createConnectors(() => ({ config })));
    const mutationOptions = $derived(connectMutationOptions(config));
    const store = createMutation(runeToStore(() => ({
        ...mutation,
        ...mutationOptions,
    })));
    const mutateResult = $derived.by(storeToRune(store));
    $effect(() => {
        config.subscribe(({ status }) => status, (status, previousStatus) => {
            if (previousStatus === "connected" && status === "disconnected")
                mutateResult.reset();
        });
    });
    const result = $derived({
        ...mutateResult,
        mutate: mutateResult.mutate,
        connect: mutateResult.mutate,
        connectAsync: mutateResult.mutateAsync,
        connectors: connectors,
    });
    return () => result;
}

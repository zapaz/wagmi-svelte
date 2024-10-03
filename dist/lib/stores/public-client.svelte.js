import { resolveVal } from "../types";
import { getPublicClient, watchPublicClient, } from "@wagmi/core";
import { createConfig } from "./config.svelte";
export function createPublicClient(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const config = $derived.by(createConfig(parameters));
    let publicClient = $state(getPublicClient(config, resolvedParameters));
    let unsubscribe;
    $effect(() => {
        unsubscribe?.();
        unsubscribe = watchPublicClient(config, {
            onChange(newPublicClient) {
                publicClient = newPublicClient;
            },
        });
    });
    return () => publicClient;
}

import { getChains, } from "@wagmi/core";
import { watchChains } from "@wagmi/core/internal";
import { createConfig } from "./config.svelte";
export function createChains(parameters = {}) {
    const config = $derived.by(createConfig(parameters));
    let chains = $state(getChains(config));
    let unsubscribe;
    $effect(() => {
        unsubscribe?.();
        unsubscribe = watchChains(config, {
            onChange: (newChains) => {
                chains = newChains;
            },
        });
    });
    return () => chains;
}

import { watchChainId, getChainId } from "@wagmi/core";
import { createConfig } from "./config.svelte";
export const createChainId = (parameters = {}) => {
    const config = $derived.by(createConfig(parameters));
    let chainId = $state(getChainId(config));
    let unsubscribe;
    $effect(() => {
        unsubscribe?.();
        unsubscribe = watchChainId(config, {
            onChange: (newChainId) => {
                chainId = newChainId;
            },
        });
    });
    return () => chainId;
};

import { getConnectors, watchConnectors } from "@wagmi/core";
import { createConfig } from "./config.svelte";
export function createConnectors(parameters = {}) {
    const config = $derived.by(createConfig(parameters));
    let connectors = $state(getConnectors(config));
    let unsubscribe;
    $effect(() => {
        unsubscribe?.();
        unsubscribe = watchConnectors(config, {
            onChange: (newConnectors) => {
                connectors = newConnectors;
            },
        });
    });
    return () => connectors;
}

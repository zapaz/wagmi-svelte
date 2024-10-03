import { resolveVal } from "../types";
import { getConnections, watchConnections } from "@wagmi/core";
import { createConfig } from "./config.svelte";
export function createConnections(parameters = {}) {
    const config = $derived.by(createConfig(parameters));
    let connections = $state(getConnections(config));
    let unsubscribe;
    $effect(() => {
        unsubscribe?.();
        unsubscribe = watchConnections(config, {
            onChange: (newConnections) => {
                connections = newConnections;
            },
        });
    });
    return () => connections;
}

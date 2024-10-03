import { getClient, watchClient, } from "@wagmi/core";
import { createConfig } from "./config.svelte";
export function createClient(parameters = {}) {
    const config = $derived.by(createConfig(parameters));
    let client = $state(getClient(config));
    let unsubscribe;
    $effect(() => {
        unsubscribe?.();
        unsubscribe = watchClient(config, {
            onChange: (newClient) => {
                client = newClient;
            },
        });
    });
    return () => client;
}

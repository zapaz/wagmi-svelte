import { getAccount, watchAccount, } from "@wagmi/core";
import { createConfig } from "./config.svelte";
export function createAccount(parameters = {}) {
    const config = $derived.by(createConfig(parameters));
    let value = $state(getAccount(config));
    let unsubscribe;
    $effect(() => {
        unsubscribe?.();
        unsubscribe = watchAccount(config, {
            onChange: (newValue) => {
                value = newValue;
            },
        });
    });
    return () => value;
}

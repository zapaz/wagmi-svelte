import { resolveVal, } from "../types";
import { watchBlockNumber, } from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { createConfig } from "./config.svelte";
import { createChainId } from "./chain-id.svelte";
export function createWatchBlockNumber(parameters = {}) {
    const { enabled, onBlockNumber, ...rest } = $derived(resolveVal(parameters));
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolveVal(parameters).chainId ?? configChainId);
    let unsubscribe;
    $effect(() => {
        if (!enabled)
            return;
        if (!onBlockNumber)
            return;
        unsubscribe?.();
        unsubscribe = watchBlockNumber(config, {
            ...rest,
            chainId,
            onBlockNumber,
        });
    });
}

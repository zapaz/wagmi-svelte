import { resolveVal, } from "../types";
import { watchBlocks, } from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { createConfig } from "./config.svelte";
import { createChainId } from "./chain-id.svelte";
export function createWatchBlocks(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { enabled = true, onBlock, ...rest } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    let unsubscribe;
    $effect(() => {
        if (!enabled)
            return;
        if (!onBlock)
            return;
        unsubscribe?.();
        unsubscribe = watchBlocks(config, {
            ...rest,
            chainId,
            onBlock,
        });
    });
}

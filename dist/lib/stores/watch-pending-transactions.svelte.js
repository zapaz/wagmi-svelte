import { resolveVal, } from "../types";
import { watchPendingTransactions, } from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { createConfig } from "./config.svelte";
import { createChainId } from "./chain-id.svelte";
export function createWatchPendingTransactions(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { enabled = true, onTransactions, ...rest } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    let unsubscribe;
    $effect(() => {
        if (!enabled)
            return;
        if (!onTransactions)
            return;
        unsubscribe?.();
        unsubscribe = watchPendingTransactions(config, {
            ...rest,
            chainId,
            onTransactions,
        });
    });
}

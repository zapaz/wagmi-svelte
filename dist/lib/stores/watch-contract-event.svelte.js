import { resolveVal, } from "../types";
import { watchContractEvent, } from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { createConfig } from "./config.svelte";
import { createChainId } from "./chain-id.svelte";
export function createWatchContractEvent(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { enabled = true, onLogs, ...rest } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    let unsubscribe;
    $effect(() => {
        if (!enabled)
            return;
        if (!onLogs)
            return;
        unsubscribe?.();
        unsubscribe = watchContractEvent(config, {
            ...rest,
            chainId,
            onLogs,
        });
    });
}

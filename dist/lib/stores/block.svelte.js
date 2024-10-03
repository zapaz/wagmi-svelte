import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import { useQueryClient } from "@tanstack/svelte-query";
import {} from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { getBlockQueryOptions, } from "@wagmi/core/query";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
import { createWatchBlocks } from "./watch-blocks.svelte";
export function createBlock(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { query = {}, watch } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const queryClient = useQueryClient();
    const configChainId = $derived.by(createChainId());
    const options = $derived(getBlockQueryOptions(config, {
        ...resolvedParameters,
        chainId: resolvedParameters.chainId ?? configChainId,
    }));
    const enabled = $derived(Boolean(query.enabled ?? true));
    createWatchBlocks(() => ({
        ...{
            config: resolvedParameters.config,
            chainId: resolvedParameters.chainId,
            ...(typeof watch === "object" ? watch : {}),
        },
        enabled: Boolean(enabled && (typeof watch === "object" ? watch.enabled : watch)),
        onBlock(block) {
            queryClient.setQueryData(options, block);
        },
    }));
    const store = createQuery(runeToStore(() => ({
        ...query,
        ...options,
        enabled,
    })));
    return storeToRune(store);
}

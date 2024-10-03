import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import { useQueryClient } from "@tanstack/svelte-query";
import {} from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { getBlockNumberQueryOptions, } from "@wagmi/core/query";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
import { createWatchBlockNumber, } from "./watch-block-number.svelte";
export function createBlockNumber(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { query = {}, watch } = resolvedParameters;
    const config = $derived.by(createConfig(parameters));
    const queryClient = useQueryClient();
    const configChainId = $derived.by(createChainId());
    const chainId = resolvedParameters.chainId ?? configChainId;
    const options = $derived(getBlockNumberQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    createWatchBlockNumber({
        ...{
            config: resolvedParameters.config,
            chainId: resolvedParameters.chainId,
            ...(typeof watch === "object" ? watch : {}),
        },
        enabled: Boolean((query.enabled ?? true) && (typeof watch === "object" ? watch.enabled : watch)),
        onBlockNumber(blockNumber) {
            queryClient.setQueryData(options.queryKey, blockNumber);
        },
    });
    const store = createQuery(runeToStore(() => ({ ...query, ...options })));
    return storeToRune(store);
}

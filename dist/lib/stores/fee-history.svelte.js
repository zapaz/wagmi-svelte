import { resolveVal, } from "../types";
import {} from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { getFeeHistoryQueryOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { createChainId } from "./chain-id.svelte";
import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createFeeHistory(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { blockCount, rewardPercentiles, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(getFeeHistoryQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const enabled = $derived(Boolean(blockCount && rewardPercentiles && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({ ...query, ...options, enabled })));
    return storeToRune(store);
}

import { resolveVal, } from "../types";
import {} from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { estimateFeesPerGasQueryOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { createChainId } from "./chain-id.svelte";
import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createEstimateFeesPerGas(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(estimateFeesPerGasQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const store = createQuery(runeToStore(() => ({ ...query, ...options })));
    return storeToRune(store);
}

import { resolveVal, } from "../types";
import {} from "@wagmi/core";
import { getStorageAtQueryOptions, } from "@wagmi/core/query";
import {} from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { createChainId } from "./chain-id.svelte";
import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createStorageAt(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { address, slot, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(getStorageAtQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const enabled = $derived(Boolean(address && slot && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({
        ...query,
        ...options,
        enabled,
    })));
    return storeToRune(store);
}

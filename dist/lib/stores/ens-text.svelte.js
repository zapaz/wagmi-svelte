import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import {} from "@wagmi/core/internal";
import { getEnsTextQueryOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { createChainId } from "./chain-id.svelte";
export function createEnsText(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { key, name, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(getEnsTextQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const enabled = $derived(Boolean(key && name && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({ ...query, ...options, enabled })));
    return storeToRune(store);
}

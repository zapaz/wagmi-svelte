import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import { getProofQueryOptions, } from "@wagmi/core/query";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
export function createProof(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { address, storageKeys, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const chainId = $derived.by(createChainId());
    const options = $derived(getProofQueryOptions(config, {
        ...resolvedParameters,
        chainId: resolvedParameters.chainId ?? chainId,
    }));
    const enabled = $derived(Boolean(address && storageKeys && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({ ...query, ...options, enabled })));
    return storeToRune(store);
}

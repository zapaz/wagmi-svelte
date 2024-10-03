import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import { getTransactionReceiptQueryOptions, } from "@wagmi/core/query";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
export function createTransactionReceipt(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { hash, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(getTransactionReceiptQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const enabled = $derived(Boolean(hash && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({ ...query, ...options, enabled })));
    return storeToRune(store);
}

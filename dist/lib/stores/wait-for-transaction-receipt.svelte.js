import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import { waitForTransactionReceiptQueryOptions, } from "@wagmi/core/query";
import { derived } from "svelte/store";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
export function createWaitForTransactionReceipt(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { hash, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(waitForTransactionReceiptQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const enabled = $derived(Boolean(hash && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({ ...query, ...options, enabled })));
    return storeToRune(store);
}

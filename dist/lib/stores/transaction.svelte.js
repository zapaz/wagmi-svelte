import { resolveVal, } from "../types";
import {} from "@wagmi/core/internal";
import { getTransactionQueryOptions, } from "@wagmi/core/query";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
import { createQuery } from "../query";
import { derived } from "svelte/store";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createTransaction(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { blockHash, blockNumber, blockTag, hash, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(getTransactionQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const enabled = $derived(Boolean(!(blockHash && blockNumber && blockTag && hash) && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({
        ...query,
        ...options,
        enabled,
    })));
    return storeToRune(store);
}

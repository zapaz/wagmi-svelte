import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import { verifyTypedDataQueryOptions, } from "@wagmi/core/query";
import { derived } from "svelte/store";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
export function createVerifyTypedData(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { address, message, primaryType, signature, types, query = {}, } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(verifyTypedDataQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const enabled = $derived(Boolean(address && message && primaryType && signature && types && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({ ...query, ...options, enabled })));
    return storeToRune(store);
}

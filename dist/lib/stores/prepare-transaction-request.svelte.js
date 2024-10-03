import { resolveVal, } from "../types";
import {} from "@wagmi/core";
import { prepareTransactionRequestQueryOptions, } from "@wagmi/core/query";
import {} from "viem";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createPrepareTransactionRequest(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { to, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(prepareTransactionRequestQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const enabled = Boolean(to && (query.enabled ?? true));
    const store = createQuery(runeToStore(() => ({
        ...query,
        ...options,
        enabled,
    })));
    return storeToRune(store);
}

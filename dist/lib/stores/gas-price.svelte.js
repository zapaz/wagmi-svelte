import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import {} from "@tanstack/svelte-query";
import { getGasPriceQueryOptions, } from "@wagmi/core/query";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
export const createGasPrice = (parameters = {}) => {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(getGasPriceQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const store = createQuery(runeToStore(() => ({ ...query, ...options })));
    return storeToRune(store);
};

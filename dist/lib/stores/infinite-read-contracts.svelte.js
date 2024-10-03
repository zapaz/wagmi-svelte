import { resolveVal, } from "../types";
import { infiniteReadContractsQueryOptions, } from "@wagmi/core/query";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
import { createInfiniteQuery, structuralSharing, } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createInfiniteReadContracts(parameters) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { contracts = [], query } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const chainId = $derived.by(createChainId());
    const options = $derived(infiniteReadContractsQueryOptions(config, {
        ...resolvedParameters,
        chainId: chainId,
        contracts: contracts,
        query: query,
    }));
    const store = createInfiniteQuery(runeToStore(() => ({
        ...query,
        ...options,
        initialPageParam: options.initialPageParam,
        structuralSharing: query.structuralSharing ?? structuralSharing,
    })));
    return storeToRune(store);
}

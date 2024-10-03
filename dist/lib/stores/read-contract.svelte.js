import { createQuery, structuralSharing } from "../query";
import { resolveVal, } from "../types";
import {} from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { readContractQueryOptions, } from "@wagmi/core/query";
import {} from "viem";
import { createConfig } from "./config.svelte";
import { createChainId } from "./chain-id.svelte";
import { runeToStore, storeToRune } from "../runes.svelte";
export function createReadContract(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { abi, address, functionName, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const chainId = $derived.by(createChainId());
    const options = $derived(readContractQueryOptions(config, {
        ...resolvedParameters,
        chainId: resolvedParameters.chainId ?? chainId,
    }));
    const enabled = $derived(Boolean(address && abi && functionName && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({
        ...query,
        ...options,
        enabled,
        structuralSharing: query.structuralSharing ?? structuralSharing,
    })));
    return storeToRune(store);
}

import { createQuery, structuralSharing } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import {} from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { readContractsQueryOptions, } from "@wagmi/core/query";
import {} from "viem";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
export function createReadContracts(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { contracts = [], query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const chainId = $derived.by(createChainId());
    const options = $derived(readContractsQueryOptions(config, {
        ...resolvedParameters,
        chainId,
    }));
    const enabled = $derived.by(() => {
        let isContractsValid = false;
        for (const contract of contracts) {
            const { abi, address, functionName } = contract;
            if (!abi || !address || !functionName) {
                isContractsValid = false;
                break;
            }
            isContractsValid = true;
        }
        return Boolean(isContractsValid && (query.enabled ?? true));
    });
    const store = createQuery(runeToStore(() => ({
        ...options,
        ...query,
        enabled,
        structuralSharing: query.structuralSharing ?? structuralSharing,
    })));
    return storeToRune(store);
}

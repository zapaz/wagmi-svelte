import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import { estimateGasQueryOptions, } from "@wagmi/core/query";
import { derived } from "svelte/store";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
import { createConnectorClient } from "./connector-client.svelte";
export function createEstimateGas(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { connector, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const connectorClient = $derived.by(createConnectorClient(() => ({
        connector,
        query: { enabled: resolvedParameters.account === undefined },
    })));
    const account = $derived(resolvedParameters.account ?? connectorClient.data?.account);
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(estimateGasQueryOptions(config, {
        ...resolvedParameters,
        account,
        chainId,
        connector,
    }));
    const enabled = $derived(Boolean((account || connector) && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({ ...query, ...options, enabled })));
    return storeToRune(store);
}

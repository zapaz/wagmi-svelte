import { resolveVal, } from "../types";
import { simulateContractQueryOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { createConnectorClient } from "./connector-client.svelte";
import { createChainId } from "./chain-id.svelte";
import { runeToStore, storeToRune } from "../runes.svelte";
import { createQuery } from "../query";
export function createSimulateContract(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { abi, address, connector, functionName, query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const connectorClient = $derived.by(createConnectorClient(() => ({
        connector,
        query: { enabled: resolvedParameters.account === undefined },
    })));
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const options = $derived(simulateContractQueryOptions(config, {
        ...resolvedParameters,
        account: resolvedParameters.account ?? connectorClient.data?.account,
        chainId,
    }));
    const enabled = $derived(Boolean(abi && address && functionName && (query.enabled ?? true)));
    const store = createQuery(runeToStore(() => ({ ...query, ...options, enabled })));
    return storeToRune(store);
}

import { createQuery } from "../query";
import { runeToStore, storeToRune } from "../runes.svelte";
import { resolveVal, } from "../types";
import { useQueryClient } from "@tanstack/svelte-query";
import { createAccount } from "./account.svelte";
import { createChainId } from "./chain-id.svelte";
import { createConfig } from "./config.svelte";
import { getWalletClientQueryOptions, } from "@wagmi/core/query";
export function createWalletClient(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { query = {} } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const queryClient = useQueryClient();
    const account = $derived.by(createAccount());
    const configChainId = $derived.by(createChainId());
    const chainId = $derived(resolvedParameters.chainId ?? configChainId);
    const { queryKey, ...options } = $derived(getWalletClientQueryOptions(config, {
        ...resolvedParameters,
        chainId,
        connector: resolvedParameters.connector ?? account.connector,
    }));
    const enabled = $derived(Boolean(account.status !== "disconnected" && (query.enabled ?? true)));
    $effect(() => {
        if (account.address)
            queryClient.invalidateQueries({ queryKey });
        else
            queryClient.removeQueries({ queryKey }); // remove when account is disconnected
    });
    const store = createQuery(runeToStore(() => ({
        ...query,
        ...options,
        queryKey,
        enabled,
        staleTime: Infinity,
    })));
    return storeToRune(store);
}

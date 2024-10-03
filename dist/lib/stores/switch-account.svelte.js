import { resolveVal } from "../types";
import { createMutation } from "@tanstack/svelte-query";
import { switchAccountMutationOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { storeToRune } from "../runes.svelte";
import { createConnections } from "./connections.svelte";
export function createSwitchAccount(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { mutation } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const connections = $derived.by(createConnections(() => ({ config })));
    const mutationOptions = $derived(switchAccountMutationOptions(config));
    const store = createMutation({
        ...mutation,
        ...mutationOptions,
    });
    const mutateResult = $derived.by(storeToRune(store));
    return () => ({
        ...mutateResult,
        connectors: connections.map((connection) => connection.connector),
        mutate: mutateResult.mutate,
        switchAccount: mutateResult.mutate,
        switchAccountAsync: mutateResult.mutateAsync,
    });
}

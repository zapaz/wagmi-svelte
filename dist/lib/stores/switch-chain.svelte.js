import { resolveVal } from "../types";
import { createMutation } from "@tanstack/svelte-query";
import {} from "@wagmi/core";
import {} from "@wagmi/core/internal";
import { switchChainMutationOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { runeToStore, storeToRune } from "../runes.svelte";
import { createChains } from "./chains.svelte";
export function createSwitchChain(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { mutation } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const chains = $derived.by(createChains({ config }));
    const mutationOptions = $derived(switchChainMutationOptions(config));
    const store = createMutation(runeToStore(() => ({
        ...mutation,
        ...mutationOptions,
    })));
    const mutateResult = $derived.by(storeToRune(store));
    return () => ({
        ...mutateResult,
        mutate: mutateResult.mutate,
        chains: chains,
        switchChain: mutateResult.mutate,
        switchChainAsync: mutateResult.mutateAsync,
    });
}

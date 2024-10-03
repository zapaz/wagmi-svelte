import { resolveVal } from "../types";
import { createMutation } from "@tanstack/svelte-query";
import { sendTransactionMutationOptions, } from "@wagmi/core/query";
import { createConfig } from "./config.svelte";
import { storeToRune } from "../runes.svelte";
export function createSendTransaction(parameters = {}) {
    const resolvedParameters = $derived(resolveVal(parameters));
    const { mutation } = $derived(resolvedParameters);
    const config = $derived.by(createConfig(parameters));
    const mutationOptions = $derived(sendTransactionMutationOptions(config));
    const store = createMutation({
        ...mutation,
        ...mutationOptions,
    });
    const mutateResult = $derived.by(storeToRune(store));
    return () => ({
        ...mutateResult,
        mutate: mutateResult.mutate,
        sendTransaction: mutateResult.mutate,
        sendTransactionAsync: mutateResult.mutateAsync,
    });
}

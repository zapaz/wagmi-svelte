import { getContext } from "svelte";
import { WagmiProviderNotFoundError } from "../errors";
import { resolveVal } from "../types";
export const createConfig = (parameters = {}) => {
    const { config: providerConfig } = getContext("wagmi");
    if (!providerConfig) {
        throw new WagmiProviderNotFoundError();
    }
    const config = $derived(resolveVal(parameters).config ?? providerConfig);
    return () => config;
};

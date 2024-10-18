import { getContext } from "svelte";
import { WagmiProviderNotFoundError } from "../errors";
import { resolveVal } from "../types";
export const createConfig = (parameters = {}) => {
    /*
    const { config: providerConfig } = getContext<{ config: Config }>("wagmi");
  
    if (!providerConfig) {
      throw new WagmiProviderNotFoundError();
    }
  
    const config = $derived(resolveVal(parameters).config ?? providerConfig);
    */
    const config = $derived(resolveVal(parameters).config);
    if (!config)
        throw new Error("config is undefined");
    return () => config;
};

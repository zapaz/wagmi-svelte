import { BaseError as CoreError } from "@wagmi/core";
import { getVersion } from "./version";
export class BaseError extends CoreError {
    name = "WagmiError";
    get docsBaseUrl() {
        return "https://wagmi.sh/react";
    }
    get version() {
        return getVersion();
    }
}
export class WagmiProviderNotFoundError extends BaseError {
    name = "WagmiProviderNotFoundError";
    constructor() {
        super("`createConfig` must be used within `WagmiProvider`.", {
            docsPath: "https://wagmi.sh/react/api/WagmiProvider",
        });
    }
}

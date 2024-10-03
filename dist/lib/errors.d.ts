import { BaseError as CoreError } from "@wagmi/core";
export type BaseErrorType = BaseError & {
    name: "WagmiError";
};
export declare class BaseError extends CoreError {
    name: string;
    get docsBaseUrl(): string;
    get version(): string;
}
export type WagmiProviderNotFoundErrorType = WagmiProviderNotFoundError & {
    name: "WagmiProviderNotFoundError";
};
export declare class WagmiProviderNotFoundError extends BaseError {
    name: string;
    constructor();
}

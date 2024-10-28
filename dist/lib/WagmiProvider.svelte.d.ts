import { SvelteComponentTyped } from "svelte";
import { type ResolvedRegister, type State } from "@wagmi/core";
import { type Snippet } from "svelte";
declare const __propDef: {
    props: {
        children: Snippet;
        config: ResolvedRegister["config"];
        initialState?: State | undefined;
        reconnectOnMount?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WagmiProviderProps = typeof __propDef.props;
export type WagmiProviderEvents = typeof __propDef.events;
export type WagmiProviderSlots = typeof __propDef.slots;
export default class WagmiProvider extends SvelteComponentTyped<WagmiProviderProps, WagmiProviderEvents, WagmiProviderSlots> {
}
export {};

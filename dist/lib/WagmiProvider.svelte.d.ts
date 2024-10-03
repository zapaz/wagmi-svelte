import { type ResolvedRegister, type State } from "@wagmi/core";
import { type Snippet } from "svelte";
declare const WagmiProvider: import("svelte").Component<{
    children: Snippet;
    config: ResolvedRegister["config"];
    initialState?: State | undefined;
    reconnectOnMount?: boolean | undefined;
}, {}, "">;
export default WagmiProvider;

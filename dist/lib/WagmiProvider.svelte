<script>import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
import { hydrate } from "@wagmi/core";
import { setContext } from "svelte";
const {
  children,
  config,
  initialState,
  reconnectOnMount = true
} = $props();
const configState = $state({ config });
const { onMount } = hydrate(config, { initialState, reconnectOnMount });
let active = true;
$effect(() => {
  if (!active)
    return;
  if (!config._internal.ssr)
    return;
  onMount();
  active = false;
});
setContext("wagmi", configState);
const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  {@render children()}
</QueryClientProvider>

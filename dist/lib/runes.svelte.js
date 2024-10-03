import { get, writable } from "svelte/store";
export const storeToRune = (store) => {
    let result = $state(get(store));
    store.subscribe(($store) => {
        result = $store;
    });
    return () => result;
};
export const runeToStore = (rune) => {
    const store = writable(rune());
    $effect(() => {
        store.set(rune());
    });
    return store;
};

import { type Readable } from "svelte/store";
import type { RuneReturnType } from "./types";
export declare const storeToRune: <T>(store: Readable<T>) => RuneReturnType<T>;
export declare const runeToStore: <T>(rune: RuneReturnType<T>) => Readable<T>;

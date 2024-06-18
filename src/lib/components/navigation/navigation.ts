import { writable, type Writable } from 'svelte/store';

export const isMenuOpened: Writable<boolean> = writable(false);

export const toggleMenu = () => isMenuOpened.update((v) => !v);

<script lang="ts">
	import '../app.css';
	import NavMenu from '$lib/components/navigation/NavMenu.svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import { isMenuOpened } from '$lib/components/navigation/navigation';
</script>

<div class="min-h-screen min-w-screen bg-background">
	{#if $isMenuOpened}
		<NavMenu />
	{:else}
		<NavBar />
		<div class="min-h-screen min-w-screen bg-background" />
		<slot />
	{/if}
</div>
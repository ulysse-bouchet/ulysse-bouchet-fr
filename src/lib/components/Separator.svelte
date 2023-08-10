<script lang="ts">
	// Imports
	import LineBall from './LineBall.svelte';

    // Attributes
	export let color: string = 'black';
	export let height: string = '5vh';
</script>

<LineBall height="5vh" ballVisibility="hidden" />
<div style="height: {height}; background-color: {color}" />

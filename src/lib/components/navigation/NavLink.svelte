<script lang="ts">
	import { background } from '$lib/svg_utils.js';
	import SVG from '$lib/SVG.svelte';

	export let text: string;
	export let link: string;
	export let icon: string;
</script>
<a class="flex space-x-4 items-center text-xl font-body text-background" href={link}>
	<span> {text} </span>
	<SVG color={background} {icon} size="28" />
</a>
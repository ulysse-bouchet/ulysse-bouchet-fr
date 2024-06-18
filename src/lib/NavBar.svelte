<script lang="ts">
	import { onMount } from 'svelte';
	import SVG from '$lib/SVG.svelte';
	import { menu } from '$lib/svg_icons';

	const getScrollDistance = (): number => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		if (scrollHeight === 0)
			return 0;

		const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

		return Math.min(Math.max(scrollPercentage, 0), 100);
	};

	/**
	 * Function to handle the custom scrollbar.
	 */
	const handleScroll = () => {
		let scrollbar = document.getElementById('scrollbar') as HTMLElement;
		scrollbar.style.width = getScrollDistance() + 'vw'; // Set new scrollbar width
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<nav class="sticky top-0 h-16 px-6 flex justify-between items-center border-primary">
	<span
		class="font-heading uppercase font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
		Ulysse Bouchet
	</span>
	<button on:click={() => { console.log("hi") }}>
		<SVG color="primary" icon={menu}></SVG>
	</button>
</nav>
<div id="scrollbar" class="sticky top-16 h-[2px] w-0 bg-gradient-to-r from-primary via-secondary to-primary"></div>

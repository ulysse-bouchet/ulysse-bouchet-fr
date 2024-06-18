<script lang="ts">
	import { onMount } from 'svelte';
	import SVG from '$lib/SVG.svelte';
	import { menu, primary } from '$lib/svg_utils';
	import { toggleMenu } from '$lib/components/navigation/navigation';

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
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<nav class="sticky top-0 h-20 px-6 flex justify-between items-center">
	<span
		class="font-heading uppercase font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
		Ulysse Bouchet
	</span>
	<button on:click={toggleMenu}>
		<SVG color={primary} icon={menu} size="28" />
	</button>
</nav>
<div class="sticky top-20 h-[2px] w-0 bg-gradient-to-r from-primary via-secondary to-primary" id="scrollbar"></div>
<script lang="ts">
	import { onMount } from 'svelte';

	const getScrollDistance = (): number => {
		const scrolledDistance = window.scrollY;
		const scrollableHeight = document.body.scrollHeight - window.innerHeight;

		if (scrollableHeight === 0)
			return 0;

		const scrollPercentage = Math.round((scrolledDistance / scrollableHeight) * 100);

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
		handleScroll();
	});
</script>

<!-- Only scrollbar, fixed to the top -->
<div class="fixed top-0 h-2 w-0 bg-gradient-to-r from-primary via-secondary to-accent z-20" id="scrollbar"></div>

<!-- Scrollbar with division name, fixed to the bottom -->
<!--<nav class="sticky bottom-0 h-20 w-full flex flex-col justify-center bg-background">
	<div class="absolute bottom-full h-[3px] w-0 bg-gradient-to-r from-primary via-secondary to-accent" id="scrollbar"></div>
	<span
		class="px-6 font-heading uppercase font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
		À propos
	</span>
</nav>-->

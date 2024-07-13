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

<div class="sticky bottom-20 h-[3px] w-0 bg-gradient-to-r from-primary via-secondary to-accent" id="scrollbar"></div>
<nav class="sticky bottom-0 h-20 w-full px-6 flex items-center bg-background border-t">
	<span
		class="font-heading uppercase font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
		À propos
	</span>
</nav>
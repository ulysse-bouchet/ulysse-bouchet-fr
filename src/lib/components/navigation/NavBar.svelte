<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled: number = 0;

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
		scrolled = getScrollDistance();
		scrollbar.style.width = getScrollDistance() + 'vw'; // Set new scrollbar width
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<div class="sticky bottom-20 h-[3px] w-0 bg-gradient-to-r from-primary via-secondary to-accent" id="scrollbar"></div>
<nav class="sticky bottom-0 h-20 w-full px-6 flex items-center bg-background">
	<span
		class="font-heading uppercase font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
		À propos {scrolled}
	</span>
</nav>
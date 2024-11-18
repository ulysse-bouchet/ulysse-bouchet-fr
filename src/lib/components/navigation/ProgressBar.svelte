<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { getScrollDistance } from './navigation';

	/**
	 * Function to handle the custom scrollbar.
	 */
	const handleScroll = () => {
		let scrollbar: HTMLDivElement = document.getElementById('scrollbar') as HTMLDivElement;
		scrollbar.style.width = getScrollDistance() + 'vw'; // Set new scrollbar width
	};

	// Add an event listener to update the custom scrollbar
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
	});
</script>

<!-- Only scrollbar, fixed to the top -->
<div
	class="fixed top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-secondary to-accent z-[60] lg:h-2"
	id="scrollbar"
></div>

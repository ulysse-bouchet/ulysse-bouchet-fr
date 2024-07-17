<script lang="ts">
	import { onMount } from 'svelte';

	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const toggleButtonVisibility = () => {
		const goTopButton = document.getElementById('goTopButton');
		if (!goTopButton) return;

		if (window.scrollY < 50)
			goTopButton.style.visibility = 'hidden';
		else
			goTopButton.style.visibility = 'visible';
	};

	onMount(() => {
		window.addEventListener('scroll', toggleButtonVisibility);
		toggleButtonVisibility();
	});
</script>

<button id="goTopButton" on:click={goToTop} class="fixed bottom-8 right-4 p-2 bg-primary text-background z-10">
	<img src="arrow_top.svg" alt="An arrow pointing towards the top of the page" class="h-8" />
</button>

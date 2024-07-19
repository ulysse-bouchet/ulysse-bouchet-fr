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

<button id="goTopButton" on:click={goToTop} class="fixed bottom-8 right-4 bg-secondary border-2 border-background z-10">
	<img src="arrow_top.svg" alt="Une flèche pointant vers le haut de la page" class="h-12 p-2 border-2 border-text" />
</button>

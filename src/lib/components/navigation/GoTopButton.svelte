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
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
			 class="h-12 w-12 p-2 fill-background border-2 border-text">
		<path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
	</svg>
</button>

<script lang="ts">
	import { onMount } from 'svelte';
	import { getScrollDistance } from './navigation';

	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const toggleButtonVisibility = () => {
		const goTopButton = document.getElementById('goTopButton');
		if (!goTopButton) return;

		if (getScrollDistance() < 10) {
			// No need for the button to appear if the user has barely even scrolled the page
			goTopButton.style.visibility = 'hidden';
		} else if (getScrollDistance() === 100) {
			goTopButton.classList.add('max-lg:bg-transparent', 'max-lg:shadow-none', 'max-lg:text-background');
			goTopButton.style.visibility = 'visible';
		} else {
			goTopButton.classList.remove('max-lg:bg-transparent', 'max-lg:shadow-none', 'max-lg:text-background');
			goTopButton.style.visibility = 'visible';
		}
	};

	onMount(() => {
		window.addEventListener('scroll', toggleButtonVisibility);
		toggleButtonVisibility();
	});
</script>

<button
	id="goTopButton"
	on:click={goToTop}
	class="fixed bg-background opacity-80 shadow rounded-lg px-4 py-2 bottom-3 right-1/2 translate-x-1/2 z-[60] lg:right-6 lg:translate-x-0 lg:bottom-6 lg:bg-transparent lg:shadow-none"
>
	<div class="flex items-center text-inherit space-x-2">
		<span> Revenir en haut </span>
		<span> ↑ </span>
	</div>
</button>

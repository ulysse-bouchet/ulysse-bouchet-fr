<script lang="ts">
	// Imports
	import '../app.css';
	import { onMount } from 'svelte';
	import NavLink from '$lib/components/NavLink.svelte';

	// Callback run after the component has been mounted
	onMount(() => {
		window.addEventListener('scroll', handleScroll); // Add a scroll handler to the window
		handleScroll();
	});

	/**
	 * Function to scroll all the way to the top of the page.
	 */
	function scrollToTop() {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}

	/**
	 * Function to handle the custom scrollbar.
	 */
	function handleScroll() {
		let scrollbar = document.getElementById('scrollbar') as HTMLElement;
		let position = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100; // Calculate position on the page
		scrollbar.style.width = position + 'vw'; // Set new scrollbar width
	}
</script>

<!-- Header -->
<header class="fixed bg-white w-full z-10">
	<div class="h-[10vh] px-80 flex items-center space-x-8">
		<!-- Website logo -->
		<button on:click={scrollToTop}>
			<img src="/images/ubonneau.svg" alt="Ulysse Bonneau Logo" class="h-6 cursor-pointer" />
		</button>
		<div class="grow" />

		<!-- Links -->
		<NavLink section="About" />
		<NavLink section="Career" />
		<NavLink section="Projects" />
		<NavLink section="Contact" />

		<!-- Download resume button -->
		<div class="py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
			<a
				download=""
				href="/CV - BOUCHET Ulysse.pdf"
				class="m-1 px-4 py-3 rounded-full font-medium text-lg bg-white transition-all duration-300 hover:after:-z-10
        after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 hover:bg-transparent hover:text-white"
			>
				Resume
			</a>
		</div>
	</div>

	<!-- Scrollbar -->
	<div
		id="scrollbar"
		class="h-1 w-[0vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
	/>
</header>

<!-- Scroll to top button -->
<button
	class="z-10 fixed right-5 bottom-5 w-16 h-16 flex items-center justify-center border-2 border-b-4 border-white bg-purple-700 rounded-xl cursor-pointer hover:bg-purple-500"
	on:click={scrollToTop}
>
	<img src="/icons/arrow-up.svg" alt="Scroll to Top" class="w-6 h-6" />
</button>

<!-- Page Content -->
<div class="pt-[10vh]">
	<slot />
</div>

<!-- Footer -->
<footer
	class="w-full h-10 flex items-center justify-center bg-pink-600 text-pink-300 text-sm font-medium"
>
	v1.2.0 - Website developed by Ulysse Bonneau in 2023. All rights reserved. This website does not
	use cookies.
</footer>

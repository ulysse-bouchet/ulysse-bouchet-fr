<script lang="ts">
	// Imports
	import LineBall from '$lib/components/LineBall.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import { quotes } from '$lib/data/quotes';
	import { onMount } from 'svelte';

	// Scroll attributes
	let direction = 1;
	let lastScroll = 0;

	onMount(() => {
		// Auto-scroll quotes
		setInterval(() => {
			let quotes = document.getElementById('quotes') as HTMLDivElement; // Get div element

			quotes.scrollBy({ top: 0, left: direction }); // Scroll

			// If we reach the beginning/end of the div, go the opposite way after a few seconds.
			if (direction == 1) {
				if (quotes?.scrollLeft == lastScroll)
					setTimeout(() => {
						direction = -1;
						lastScroll = 0;
					}, 2500);
			} else if (quotes?.scrollLeft <= 1)
				setTimeout(() => {
					direction = 1;
					lastScroll = 9999;
				}, 2500);

			if (quotes?.scrollLeft) lastScroll = quotes?.scrollLeft;
		}, 20);
	});
</script>

<LineBall />
<div id="about" class="h-[85vh] pt-[5vh] px-80 flex flex-col bg-purple-600">
	<span class="text-[7vh] text-white font-bold"> About me </span>
	<!-- Information about me -->
	<div class="mt-8 flex">
		<img
			src="images/profile.png"
			class="h-48 w-48 mr-8 rounded-xl object-cover"
			alt="Ulysse Bonneau"
		/>
		<div class="mt-8 flex flex-col font-bold">
			<span class="mb-3 text-white text-5xl">Web Developer</span>
			<span class="text-3xl text-purple-300 font-medium">22 years old</span>
		</div>
	</div>

	<!-- Text about myself -->
	<div
		class="w-3/4 mt-8 ml-8 py-4 pl-10 pr-16 bg-purple-200 rounded-full rounded-tl-none font-medium text-lg text-purple-900 text-justify"
	>
		I am a young french engineer, currently working as an apprentice at
		<a
			class="font-bold text-purple-600 hover:text-pink-600 transition-all"
			href="https://cea.fr/english"
		>
			CEA
		</a>
		during my studies at
		<a
			class="font-bold text-purple-600 hover:text-pink-600 transition-all"
			href="https://eng.efrei.fr/"
		>
			Efrei Paris</a
		>. My passion about programming led me to multiple schools and internships that helped me hone
		my skills over the past few years. As a web developer, I like to write clean code and develop
		high-quality websites using various technologies and frameworks.
	</div>

	<!-- Quotes -->
	<div id="quotes" class="mt-12 pb-2 flex space-x-4 w-4/5 overflow-x-auto scrollbar-hide">
		{#each quotes as quote}
			<Quote author={quote.author} authorTitle={quote.authorTitle} quote={quote.quote} />
		{/each}
	</div>
</div>

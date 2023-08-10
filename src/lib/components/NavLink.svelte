<script lang="ts">
	// Attributes
	export let section: string;

	/**
	 * Function to scroll smoothly to a section of the page.
	 */
	function scrollTo() {
		let target = document.getElementById(section.toLowerCase()) as HTMLElement;

		window.scrollTo({
			top: target.offsetTop - 75,
			left: 0,
			behavior: 'smooth'
		});
	}
</script>

<button
	class="group text-lg font-medium hover:text-indigo-500 transition-all duration-300 cursor-pointer"
	on:click={scrollTo}
>
	{section}
	<span
		class="block h-[3px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
	/>
</button>

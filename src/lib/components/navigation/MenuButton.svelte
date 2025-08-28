<script lang="ts">
	// Attributes
	let menuOpened: boolean = false;

	/**
	 * Function to toggle the menu open/closed
	 */
	const toggleMenu = () => {
		menuOpened = !menuOpened;
	};

	/**
	 * Function to smoothly scroll to a section
	 * @param section the destination section
	 */
	const goTo = (section: string) => {
		menuOpened = false;
		if (section === 'about')
			window.scrollTo({ top: 0, behavior: 'smooth' }); // "About" is the section at the top of the page
		else {
			const anchor: HTMLDivElement = document.getElementById(section) as HTMLDivElement;
			window.scrollTo({ top: (anchor?.offsetTop ?? 0) + 16, behavior: 'smooth' });
		}
	};
</script>

<!-- Mobile version of the menu -->
<div class="fixed top-4 right-4 flex flex-col items-end z-[60] lg:hidden">
	<button id="menuButton" on:click={toggleMenu} class="rounded border-primary">
		{#if menuOpened}
			<!-- Close menu icon -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="h-10 w-10 p-2 fill-text">
				<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
			</svg>
		{:else}
			<!-- Open menu icon -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="h-10 w-10 p-2 fill-text">
				<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
			</svg>
		{/if}
	</button>
	{#if menuOpened}
		<!-- Dropdown menu -->
		<div class="bg-[rgba(246,239,235,0.8)] border rounded-lg border-text font-lig -translate-y-0.5 -z-10">
			<div id="menuList" class="py-4 pr-5 pl-8 flex flex-col items-end space-y-3">
				<img src="images/UB.png" alt="UB" class="w-8 aspect-square" />
				<button
					on:click={() => {
						goTo('about');
					}}
				>
					À propos
				</button>
				<button
					on:click={() => {
						goTo('career');
					}}
				>
					Carrière
				</button>
				<button
					on:click={() => {
						goTo('school');
					}}
				>
					Formation
				</button>
				<!-- <button
					on:click={() => {
						goTo('projects');
					}}
				>
					Projets
				</button> -->
				<button
					on:click={() => {
						goTo('contact');
					}}
				>
					Contact
				</button>
			</div>
		</div>
	{/if}
</div>
<!-- Larger screens (laptop, pc...) version of the menu -->
<div class="fixed top-6 right-4 flex flex-col items-end z-[60] font-light text-white text-xl max-lg:hidden">
	<div id="menuList" class="py-4 pr-5 pl-8 flex flex-col items-end space-y-4">
		<img src="images/UB.png" alt="UB" class="w-12 aspect-square" />
		<button
			on:click={() => {
				goTo('about');
			}}
		>
			À propos
		</button>
		<button
			on:click={() => {
				goTo('career');
			}}
		>
			Carrière
		</button>
		<button
			on:click={() => {
				goTo('school');
			}}
		>
			Formation
		</button>
		<!-- <button
					on:click={() => {
						goTo('projects');
					}}
				>
					Projets
				</button> -->
		<button
			on:click={() => {
				goTo('contact');
			}}
		>
			Contact
		</button>
	</div>
</div>

<style>
	#menuList > button {
		@apply uppercase;
	}
</style>

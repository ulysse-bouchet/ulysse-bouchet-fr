<script lang="ts">
	let menuOpened: boolean = false;

	const toggleMenu = () => {
		menuOpened = !menuOpened;
	};

	const goTo = (section: string) => {
		menuOpened = false;
		let anchor = document.getElementById(section);
		window.scrollTo({ top: anchor?.offsetTop, behavior: 'smooth' });
	};
</script>

<div class="fixed top-4 right-4 flex flex-col items-end z-20">
	<button id="menuButton" on:click={toggleMenu} class="bg-primary border-2 border-background">
		{#if menuOpened}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
					 class="h-12 w-12 p-2 fill-background border-2 border-text">
				<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
					 class="h-12 w-12 p-2 fill-background border-2 border-text">
				<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
			</svg>
		{/if}
	</button>
	{#if menuOpened}
		<div class="bg-primary-background border-2 border-background font-semibold -translate-y-0.5 -z-10">
			<div id="menuList" class="border-2 border-text pr-3 pl-6 py-3 flex flex-col items-end space-y-3">
				<button on:click={() => { goTo('about') }}>
					À propos
				</button>
				<button on:click={() => { goTo('career') }}>
					Carrière
				</button>
				<button on:click={() => { goTo('school') }}>
					Formation
				</button>
				<button on:click={() => { goTo('projects') }}>
					Projets
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
    #menuList > button {
        @apply uppercase;
    }
</style>
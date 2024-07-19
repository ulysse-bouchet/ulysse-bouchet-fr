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
	<button id="menuButton" on:click={toggleMenu} class="bg-primary h-12 w-12 border-2 border-background">
		{#if menuOpened}
			<img src="close.svg" alt="Un menu 'burger'" class="p-2 border-2 border-text" />
		{:else}
			<img src="burger_menu.svg" alt="Un menu 'burger'" class="p-2 border-2 border-text" />
		{/if}
	</button>
	{#if menuOpened}
		<div class="bg-primary-background border-2 border-background font-semibold -translate-y-0.5 -z-10">
			<div id="menuList" class="border-2 border-text pr-2 pl-4 py-2 flex flex-col items-end space-y-2">
				<button on:click={() => { goTo('about') }}>
					À propos
				</button>
				<button on:click={() => { goTo('career') }}>
					Carrière
				</button>
				<button on:click={() => { goTo('school') }}>
					Formation
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
    #menuList > button {
        @apply uppercase text-sm;
    }
</style>
<script lang="ts">
	import SVG from '$lib/SVG.svelte';
	import { background, close, computer, mail, person, work } from '$lib/svg_utils';
	import NavLink from '$lib/components/navigation/NavLink.svelte';
	import { toggleMenu } from '$lib/components/navigation/navigation';
</script>

<nav
	class="h-screen bg-gradient-to-br from-primary via-secondary to-primary">
	<div class="h-20 px-6 flex justify-between items-center">
		<span
			class="font-heading uppercase font-bold text-xl bg-clip-text text-transparent bg-background">
			Ulysse Bouchet
		</span>
		<button on:click={toggleMenu}>
			<SVG color={background} icon={close} size="28" />
		</button>
	</div>
	<div class="px-8 pt-4 flex flex-col items-end space-y-4">
		<NavLink icon={person} link="#" text="About" />
		<NavLink icon={work} link="#" text="Career" />
		<NavLink icon={computer} link="#" text="Projects" />
		<NavLink icon={mail} link="#" text="Contact" />
	</div>
</nav>
<script lang="ts">
	import '../app.css';
	import ProgressBar from '$lib/components/navigation/ProgressBar.svelte';
	import GoTopButton from '$lib/components/navigation/GoTopButton.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import MenuButton from '$lib/components/navigation/MenuButton.svelte';
</script>

<div
	class="min-h-screen min-w-screen bg-gradient-to-br from-primary via-secondary to-accent bg-fixed font-body text-base text-text lg:py-8 lg:text-lg"
>
	<div class="lg:mx-[20vw] 2xl:mx-[30vw] lg:shadow-2xl lg:bg-slate-200 lg:rounded-3xl">
		<ProgressBar />
		<MenuButton />
		<slot />
		<GoTopButton />
		<Footer />
	</div>
</div>

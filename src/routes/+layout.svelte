<script lang="ts">
	import '../app.css';
	import ProgressBar from '$lib/components/navigation/ProgressBar.svelte';
	import GoTopButton from '$lib/components/navigation/GoTopButton.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import MenuButton from '$lib/components/navigation/MenuButton.svelte';
</script>

<div class="min-h-screen min-w-screen bg-background font-body text-base text-text">
	<ProgressBar />
	<MenuButton />
	<slot />
	<GoTopButton />
	<Footer />
</div>
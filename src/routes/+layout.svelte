<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import GoTopButton from '$lib/components/navigation/GoTopButton.svelte';
</script>

<div class="min-h-screen min-w-screen bg-background font-body text-base text-text">
	<slot />
	<NavBar />
	<GoTopButton />
</div>
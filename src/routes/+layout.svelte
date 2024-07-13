<script lang="ts">
    import '../app.css';
    import NavBar from '$lib/components/navigation/NavBar.svelte';
</script>

<div class="min-h-screen min-w-screen bg-background">
    <div class="min-h-screen min-w-screen bg-background"/>
    <slot/>
    <div class="min-h-screen min-w-screen bg-background"/>
    <NavBar/>
</div>
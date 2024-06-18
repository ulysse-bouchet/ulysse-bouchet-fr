<script>
    import "../app.css";
    import NavBar from "$lib/NavBar.svelte";
</script>

<div class="min-h-screen min-w-screen bg-background">
    <NavBar />
    <slot />
</div>
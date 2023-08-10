<script lang="ts">
	// Imports
	import Separator from '$lib/components/Separator.svelte';
	import LineBall from '$lib/components/LineBall.svelte';
	import AboutSection from '$lib/sections/AboutSection.svelte';
	import Canvas from '$lib/sections/CanvasSection.svelte';
	import CareerSection from '$lib/sections/CareerSection.svelte';
</script>

<!-- Main Page Content -->
<div
	id="main"
	class="h-[80vh] px-80 flex flex-col font-bold items-start justify-end transition-all duration-500"
>
	<!-- Canvas -->
	<div class="absolute top-0 left-0">
		<Canvas />
	</div>

	<!-- Bar -->
	<div id="bar-circle" class="absolute left-60 bottom-[10vh] flex flex-col items-center">
		<div class="h-7 w-7 flex-shrink-0 relative top-3 rounded-full bg-indigo-500" />
		<div class="h-[30vh] w-2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />
	</div>

	<!-- Text -->
	<div class="pb-[10vh] pt-5 flex flex-col">
		<span id="hello" class="text-[7vh]"> Welcome to </span>
		<div id="ubonneau" class="flex items-end">
			<img src="/images/ubonneau.svg" alt="Ulysse Bonneau Logo" class="h-[10vh]" />
			<span id="fr" class="text-5xl"> .FR </span>
		</div>
	</div>
</div>

<!-- About Section -->
<Separator color="rgb(219 39 119)" />
<AboutSection />

<!-- Career Section -->
<Separator color="rgb(124 58 237)" />
<CareerSection />

<!-- Projects Section -->
<Separator color="rgb(124 58 237)" />
<div id="projects" class="h-[90vh]">
	<LineBall color="rgb(147 51 234)" ballVisibility="hidden" />
</div>

<!-- Contact Section -->
<Separator color="rgb(124 58 237)" />
<div id="contact" class="h-[90vh] bg-[#333]">
	<LineBall color="rgb(147 51 234)" ballVisibility="hidden" />
</div>

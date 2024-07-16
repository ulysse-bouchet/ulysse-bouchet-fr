<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { Stage, Layer, RegularPolygon } from 'svelte-konva';
	import { triangles } from '$lib/data/triangles';

	// Canvas size
	let width = 1920;
	let height = 1080;

	// Update canvas size
	onMount(() => {
		const aboutSection = document.getElementById('about');
		if (!aboutSection) return;

		width = aboutSection.clientWidth - 48;
		height = 64;

		// const colors = ['#6D466B', '#0E9594', '#EE6055'];
		triangles.forEach((triangle) => {
			triangle.y = (triangle.y + 0.05) * height * 0.9;
			triangle.x *= width;
			triangle.radius *= 100;
			if (Math.random() < 0.5) triangle.fill = triangle.stroke;
		});
	});
</script>

<!-- Canvas -->
<div class="z-10">
	<Stage config={{ width, height }}>
		<Layer>
			<!-- Triangles -->
			{#each triangles as triangle}
				<RegularPolygon
					config={triangle}
				/>
			{/each}
		</Layer>
	</Stage>
</div>
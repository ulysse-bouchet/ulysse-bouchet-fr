<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import Konva from 'konva';
	import { Stage, Layer, RegularPolygon } from 'svelte-konva';
	import { triangles } from '$lib/data/triangles';

	// Canvas size
	let width = 1920;
	let height = 1080;

	let trianglesLayer: Konva.Layer;

	// Update canvas size
	onMount(() => {
		width = window.innerWidth;
		height = 100;
		triangles.forEach((triangle) => {
			triangle.y *= 100;
			triangle.x *= window.innerWidth;
			triangle.radius *= 100;
		});

		setInterval(blinkTriangle, 100);
	});

	const blinkTriangle = () => {
		const r = Math.round(Math.random() * triangles.length - 1);
		let triangle = trianglesLayer.children[r] as Konva.Shape;

		if (triangle) {
			if (triangle.fill() == triangle.stroke())
				triangle.fill('transparent');
			else
				triangle.fill(triangle.stroke());
		}
	};
</script>

<!-- Canvas -->
<div class="pt-6">
	<Stage config={{ width, height }}>
		<Layer bind:handle={trianglesLayer}>
			<!-- Triangles -->
			{#each triangles as triangle}
				<RegularPolygon
					config={triangle}
				/>
			{/each}
		</Layer>
	</Stage>
</div>
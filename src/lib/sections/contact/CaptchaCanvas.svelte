<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { Stage, Layer, RegularPolygon, Text } from 'svelte-konva';
	import { type Triangle, getTriangles } from '$lib/data/triangles';
	import { captcha } from './captcha_store';

	const triangles: Triangle[] = getTriangles();

	// Canvas size
	let width = 1920;
	let height = 1080;

	// Update canvas size
	onMount(() => {
		const contactSection = document.getElementById('contact');
		if (!contactSection) return;

		width = contactSection.clientWidth / 2 - 48;
		height = 36;

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
				<RegularPolygon config={{ ...triangle, opacity: 0.5 }} />
			{/each}
			<Text
				config={{
					text: $captcha,
					width,
					height,
					fontSize: 18,
					align: 'center',
					verticalAlign: 'middle',
					letterSpacing: 8
				}}
			></Text>
		</Layer>
	</Stage>
</div>

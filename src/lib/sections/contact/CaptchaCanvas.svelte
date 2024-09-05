<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { Stage, Layer, RegularPolygon, Text } from 'svelte-konva';
	import { type Triangle, getTriangles } from '$lib/data/triangles';

	const triangles: Triangle[] = getTriangles();

	// Canvas size
	let width = 1920;
	let height = 1080;
	let text: string = '';

	const generateRandomString = (length = 6) => {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let result = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			result += characters[randomIndex];
		}
		return result;
	};

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

		text = generateRandomString();
	});
</script>

<!-- Canvas -->
<div class="z-10">
	<Stage config={{ width, height }}>
		<Layer>
			<!-- Triangles -->
			{#each triangles as triangle}
				<RegularPolygon config={triangle} />
			{/each}
			<Text config={{ text, x: width / 4, y: height / 4, fontSize: 18 }}></Text>
		</Layer>
	</Stage>
</div>

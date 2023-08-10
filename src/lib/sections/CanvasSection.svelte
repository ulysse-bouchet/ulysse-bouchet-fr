<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { Stage, Layer, Line, RegularPolygon } from 'svelte-konva';
	import { triangles } from '$lib/data/triangles';

	// Canvas size
	let width = 1920;
	let height = 1080;

	// Update canvas size
	onMount(() => {
		width = window.innerWidth;
		height = window.innerHeight * 0.9;
	});

	let lines: any[] = []; // Array containing the lines that follow the mouse
	let points: any[] = []; // Array containing the points used to create the lines

	/**
	 * Draw a line that follows the mouse
	 * @param event event that triggered the handle
	 */
	function handleMouseMove(event: any) {
		const mousePos = event.detail.target.getStage().getPointerPosition(); // Get mouse position

		const curPoint = { x: mousePos.x + 5, y: mousePos.y + 5 }; // Get new point coordinates

		// If it is the first point, exit the handler
		if (points.length == 0) {
			points.push(curPoint);
			return;
		}

		const lastPoint = { x: points.at(-1).x, y: points.at(-1).y }; // Else get the previous point

		// Add a new line between the new and previous mouse position
		const newLine = {
			points: [lastPoint.x, lastPoint.y, curPoint.x, curPoint.y],
			stroke: '#ec4899',
			opacity: 0.5,
			strokeWidth: 5,
			listening: false
		};

		// Add the new line to the lines array
		lines.push(newLine);
		points.push(curPoint);

		lines = lines; // Hack to force svelte update

		postLineCreation(newLine); // Handles what happens to the line after its creation
	}

	/**
	 * Update the line color and the remove it from the array after a bit
	 * @param line the line that has been created
	 */
	function postLineCreation(line: any) {
		// Gradually change the line color
		setTimeout(() => {
			line.stroke = 'rgb(168, 85, 247)';
			setTimeout(() => {
				line.stroke = 'rgb(99, 102, 241)';
			}, 400);
		}, 100);

		// Remove the line after some time has passed
		setTimeout(() => {
			lines.shift();
			points.shift();

			lines = lines; // Hack to force svelte update
		}, 750);
	}

	/**
	 * Fill a triangle
	 * @param event event that triggered the handle
	 */
	function handleMouseOverTriangle(event: any) {
		let target = event.detail.target;
		target.fill(target.stroke());

		const stage = target.getStage();
		stage.container().style.cursor = 'pointer';
	}

	/**
	 * Unfill a triangle
	 * @param event event that triggered the handle
	 */
	function handleMouseLeaveTriangle(event: any) {
		let target = event.detail.target;
		target.fill('transparent');

		const stage = target.getStage();
		stage.container().style.cursor = 'default';
	}

	/**
	 * Rotate a triangle
	 * @param event event that triggered the handle
	 */
	function handleClickTriangle(event: any) {
		let target = event.detail.target;
		target.rotation(target.rotation() + 15);
	}
</script>

<!-- Canvas -->
<Stage config={{ width, height }} on:mousemove={handleMouseMove}>
	<Layer>
		<!-- Mouse line -->
		{#each lines as line} <Line config={line} /> {/each}

		<!-- Triangles -->
		{#each triangles as triangle}
			<RegularPolygon
				config={triangle}
				on:mouseover={handleMouseOverTriangle}
				on:mouseleave={handleMouseLeaveTriangle}
				on:click={handleClickTriangle}
			/>
		{/each}
	</Layer>
</Stage>

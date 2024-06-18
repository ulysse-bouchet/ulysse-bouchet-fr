<script lang="ts">
	export let icon: string;
	export let color: string = 'black';
	export let size: number = 24;
</script>

<svg
	fill="{color}"
	height="{size}px"
	viewBox="0 -960 960 960"
	width="{size}px"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d={icon} />
</svg>

<script lang="ts">
	export let icon: string;
	export let color: string = "black";
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height="24px"
	width="24px"
	viewBox="0 -960 960 960"
	class="fill-{color}"
>
	<path d={icon} />
</svg>

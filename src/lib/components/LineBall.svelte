<script lang="ts">
	// Attributes
	export let color: string = 'white';
	export let ballVisibility: string = 'visible';
	export let height: string = '90vh';
</script>

<div class="absolute left-60 flex flex-col items-center transition-all duration-500">
	<!-- Line -->
	<div
		class="h-7 w-7 flex-shrink-0 relative top-[8.5vh] rounded-full bg-blue"
		style="background-color: {color}; visibility: {ballVisibility}"
	/>
    
	<!-- Ball -->
	<div
		class="h-[90vh] w-2 relative -top-[3vh] bg-white"
		style="background-color: {color}; height: {height}"
	/>
</div>

<script lang="ts">
	// Attributes
	export let school: string;
	export let title: string;
	export let date: string;
	export let description: string;
</script>

<div class="h-60 w-5/6 py-6 px-8 flex flex-col bg-pink-200 rounded-xl">
	<!-- School information -->
	<div class="flex items-center justify-between">
		<div class="flex flex-col">
			<span class="text-xl font-bold text-rose-900">{school}</span>
			<span class="pt-1 text-sm font-medium text-pink-600">{title}</span>
		</div>
		<span class="text-lg font-medium text-rose-900">{date}</span>
	</div>

	<!-- Description -->
	<span class="mt-8 grow text-justify">{description}</span>
</div>

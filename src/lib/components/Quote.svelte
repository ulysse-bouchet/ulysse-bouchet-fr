<script lang="ts">
    // Attributes
	export let author: string;
	export let authorTitle: string;
	export let quote: string;
</script>

<div class="h-40 w-80 p-4 flex flex-col bg-purple-400 rounded-xl shrink-0">
	<span class="text-lg font-medium">{author}</span>
	<span class="text-xs text-purple-700">{authorTitle}</span>
	<span class="mt-2 text-purple-950">
		{quote}
	</span>
</div>

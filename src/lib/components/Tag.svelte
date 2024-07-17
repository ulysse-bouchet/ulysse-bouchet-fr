<script lang="ts">
	import type { Tag } from '$lib/data/timeline_data';

	export let tag: Tag;
	export let color: string;
</script>

<a href={tag.link} target="_blank"
	 class="text-{color} mr-1 mb-1 text-[10px] text-background lowercase font-semibold">
	#{tag.text}
</a>
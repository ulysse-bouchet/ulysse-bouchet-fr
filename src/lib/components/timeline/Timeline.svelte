<script lang="ts">
	import TimelineComponent from '$lib/components/timeline/TimelineComponent.svelte';
	import type { TimelineElement } from '$lib/data/timeline_data';

	export let data: Array<TimelineElement>;
	export let color: string;
</script>

<ul class="mt-6 timeline timeline-snap-icon timeline-compact timeline-vertical">
	{#each data as element, i}
		<TimelineComponent {element} index={i} size={data.length} {color} />
	{/each}
</ul>
<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import type { TimelineElement } from '$lib/data/timeline_data';

	export let element: TimelineElement;
	export let index: number;
	export let size: number;
	export let color: string;
</script>

<li>
	{#if index !== 0}
		<hr class="bg-{color} w-0" />
	{/if}
	<div class="timeline-middle">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="h-3 w-3 fill-{color}"
		>
			<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd" />
		</svg>
	</div>
	<div class="timeline-end mt-[2px] pl-2 pb-6">
		<time class="text-sm">{element.time}</time>
		<div class="title text-lg font-medium text-{color} flex items-center space-x-2">
			<img src="images/{element.logo}" class="w-12" alt="logo" />
			<span> {element.title} </span>
		</div>
		<div class="subtitle text-sm text-{color} mb-4">{element.subtitle}</div>
		{element.description}
		{#if element.tags}
			<div class="mt-2 flex flex-wrap">
				{#each element.tags as tag}
					<Tag {tag} {color} />
				{/each}
			</div>
		{/if}
	</div>
	{#if index !== size - 1}
		<hr class="bg-{color} w-0" />
	{/if}
</li>

<!--
/!\ HACK TO FORCE TAILWIND TO PARSE THESE CLASSES :
fill-primary
fill-secondary
fill-accent

bg-primary
bg-secondary
bg-accent
-->

<style>
	hr {
		width: 0.1rem !important;
	}
</style>

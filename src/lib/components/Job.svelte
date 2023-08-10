<script lang="ts">
	// Attributes
	export let icon: string;
	export let company: string;
	export let title: string;
	export let date: string;
	export let description: string;
	export let tags: any[];
</script>

<div
	class="shrink-0 w-11/12 h-full p-12 pb-8 flex flex-col bg-pink-200 rounded-3xl transition-all duration-200"
>
	<!-- Job Information-->
	<div class="flex items-center space-x-8">
		<img src="images/{icon}" alt="{company} logo" class="h-24 w-24 rounded-xl object-contain" />
		<div class="flex flex-col grow">
			<span class="mb-1 text-4xl font-bold text-rose-900">{company}</span>
			<span class="font-medium text-lg text-pink-600">{title}</span>
		</div>
		<span class="text-2xl font-medium text-rose-900">{date}</span>
	</div>

	<!-- Job Description -->
	<span class="mt-8 grow text-xl leading-10 text-justify">{description}</span>

	<!-- Tag list -->
	<div
		class="w-3/4 flex flex-wrap-reverse justify-end space-x-4 self-end text-sm font-bold text-white"
	>
		{#each tags as tag}
			<a
				href={tag.link}
				target="_blank"
				class="transition-all py-1 px-2 my-1 bg-pink-400 rounded-lg hover:bg-purple-600"
			>
				#{tag.tag}
			</a>
		{/each}
	</div>
</div>

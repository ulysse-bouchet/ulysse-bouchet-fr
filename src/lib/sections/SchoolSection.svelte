<script>
	import { school } from '$lib/data/timeline_data';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
</script>

<div id="school" class="bg-background rounded-b-3xl shadow-xl relative -mt-4 p-6 pt-10 z-30 lg:pt-14 lg:px-12">
	<span
		class="font-heading font-medium text-xl text-accent lg:text-2xl">
		Formation
	</span>
	<Timeline data={school} color="accent" />
	<!-- <div class="flex justify-center">
		<button class="text-center text-accent">
			En savoir plus ->
		</button>
	</div> -->
</div>
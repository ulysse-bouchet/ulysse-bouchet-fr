<script>
	import { career } from '$lib/data/timeline_data';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
</script>

<div id="career" class="bg-primary-background rounded-b-3xl shadow-xl relative -mt-4 p-6 pt-10 z-40">
	<span
		class="font-heading font-medium text-xl text-primary">
		Carrière
	</span>
	<Timeline data={career} color="primary" />
	<!-- <div class="flex justify-center">
		<button class="text-center text-primary">
			En savoir plus ->
		</button>
	</div> -->
</div>
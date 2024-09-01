<script>
	import { school } from '$lib/data/timeline_data';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
</script>

<div id="school" class="min-h-screen min-w-screen bg-background rounded-b-3xl shadow-xl relative -mt-4 p-6 pt-10 z-30">
	<span
		class="font-heading font-medium text-xl text-accent">
		Formation
	</span>
	<Timeline data={school} color="accent" />
	<div class="flex justify-center">
		<button class="text-center text-accent">
			En savoir plus ->
		</button>
	</div>
</div>
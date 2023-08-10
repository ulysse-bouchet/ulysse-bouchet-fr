<script lang="ts">
	// Imports
	import LineBall from '$lib/components/LineBall.svelte';
	import Job from '$lib/components/Job.svelte';
	import School from '$lib/components/School.svelte';
	import { jobs } from '$lib/data/jobs';
	import { schools } from '$lib/data/schools';

	let workPanelSelected = true; // Is the work or school panel selected
	let jobIndex = 0; // Current job for navigation

	/**
	 * Toggle the career button.
	 * @param event event that trigger the handler
	 */
	function switchCareer(event: any) {
		// Get HTML buttons elements
		let workBtn = document.getElementById('work-btn') as HTMLElement;
		let schoolBtn = document.getElementById('school-btn') as HTMLElement;

		// Add & Remove active class from buttons
		if (event.target == workBtn && !workBtn.classList.contains('active')) {
			schoolBtn.classList.remove('active');
			workBtn.classList.add('active');
			workPanelSelected = true;
		} else if (event.target == schoolBtn && !schoolBtn.classList.contains('active')) {
			workBtn.classList.remove('active');
			schoolBtn.classList.add('active');
			workPanelSelected = false;
		}
	}

	/**
	 * Scroll to the previous job.
	 */
	function scrollToPrev() {
		let jobsDiv = document.getElementById('jobs') as HTMLDivElement; // Get jobs div element

		let jobWidth = jobsDiv.children[0].clientWidth; // Calculate scroll distance

		// Scroll to previous job
		jobsDiv.scrollTo({
			left: jobWidth * --jobIndex,
			behavior: 'smooth'
		});

		// Get HTML buttons elements
		let nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
		let prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;

		// Disable button if we're at the first element
		if (jobIndex <= 0) {
			jobIndex = 0;

			prevBtn.style.opacity = '50%';
			prevBtn.disabled = true;
		}

		// Enable next button
		nextBtn.style.opacity = '100%';
		nextBtn.disabled = false;
	}

	/**
	 * Scroll to the next job.
	 */
	function scrollToNext() {
		let jobsDiv = document.getElementById('jobs') as HTMLDivElement; // Get jobs div element

		let jobWidth = jobsDiv.children[0].clientWidth; // Calculate scroll distance

		// Scroll to next job
		jobsDiv.scrollTo({
			left: jobWidth * ++jobIndex,
			behavior: 'smooth'
		});

		// Get HTML buttons elements
		let nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
		let prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;

		// Disable button if we're at the last element
		if (jobIndex >= jobs.length - 1) {
			jobIndex = jobs.length - 1;

			nextBtn.style.opacity = '50%';
			nextBtn.disabled = true;
		}

		// Enable prev button
		prevBtn.style.opacity = '100%';
		prevBtn.disabled = false;
	}
</script>

<div id="career" class="h-[90vh]">
	<LineBall />
	<div id="about" class="h-[90vh] pt-[5vh] px-80 flex flex-col bg-pink-600">
		<span class="text-[7vh] text-white font-bold"> Career </span>
		<!-- Toggle Work/School Button -->
		<div class="mt-4 flex w-fit bg-pink-200 rounded text-pink-400 cursor-pointer select-none">
			<button id="work-btn" class="px-6 py-3 rounded-l active shadow-inner" on:click={switchCareer}>
				Work
			</button>
			<button id="school-btn" class="px-6 py-3 rounded-r shadow-inner" on:click={switchCareer}>
				School
			</button>
		</div>
		{#if workPanelSelected}
			<div class="flex h-full items-center space-x-8">
				<!-- Previous Button -->
				<button id="prevBtn" on:click={scrollToPrev} disabled class="opacity-50">
					<img
						src="icons/arrow-left.svg"
						alt="prev"
						class="h-8 w-8 p-1 bg-pink-600 border-2 rounded-full z-10"
					/>
				</button>

				<!-- Jobs Carousel -->
				<div
					id="jobs"
					class="h-4/5 w-5/6 mt-16 mb-8 flex flex-row items-center space-x-8 overflow-x-hidden"
				>
					{#each jobs as job}
						<Job
							icon={job.icon}
							company={job.company}
							title={job.title}
							date={job.date}
							description={job.description}
							tags={job.tags}
						/>
					{/each}
				</div>

				<!-- Next Button -->
				<button class="h-fit" id="nextBtn" on:click={scrollToNext}>
					<img
						src="icons/arrow-right.svg"
						alt="next"
						class="h-8 w-8 p-1 bg-pink-600 border-2 rounded-full z-10"
					/>
				</button>
			</div>
		{:else}
			<div class="h-full py-8 grid grid-cols-2 items-center">
				{#each schools as school}
					<School
						school={school.school}
						title={school.title}
						date={school.date}
						description={school.description}
					/>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	/* Active Button Style */
	.active {
		background-color: rgb(190 24 93);
		color: white;
		font-weight: bold;
		box-shadow: none;
	}
</style>

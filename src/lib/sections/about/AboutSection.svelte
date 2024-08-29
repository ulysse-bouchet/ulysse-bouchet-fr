<script>
	import Canvas from '$lib/sections/about/Canvas.svelte';
</script>

<div id="about" class="relative min-h-screen min-w-screen bg-transparent z-10">
	<div class="flex flex-col items-center">
		<img
			alt="Ulysse Bouchet"
			src="ulysse.jpg"
			class="mt-8 w-2/3 h-2/3 rounded-full aspect-square object-cover shadow-xl
			border-4 border-l-primary border-t-primary border-r-secondary border-b-secondary"
		/>

		<!-- Infos -->
		<div class="mt-6 flex flex-col items-center">
			<span class="text-primary text-lg font-semibold uppercase">Ulysse Bouchet</span>
			<span class="text-secondary text-sm font-medium uppercase">23 ans - Paris/92</span>
		</div>
		<!-- <div class="py-2 flex items-center text-accent bg-background font-medium -translate-y-1">
			<span class="grow w-2/3 pl-6">Développeur Web</span>
			<span class="w-1/3 flex justify-center items-center space-x-1 text-xs">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 -960 960 960"
					class="fill-background h-4 w-4"
				>
					<path
						d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
					/>
				</svg>
				<span>Paris - 92</span>
			</span>
		</div> -->
	</div>

	<!-- Description -->
	<div class="px-6 text-justify relative text-base">
		<div class="py-8 flex items-center">
			<Canvas />
		</div>
		Bonjour, et bienvenue sur mon site !<br /> <br />
		Je suis un jeune ingénieur en informatique, spécialisé dans le <span class="text-accent font-semibold">développement web</span>. Fraîchement diplômé
		de l'Efrei Paris, je suis maintenant à la recherche d'un emploi dans ce domaine qui me passionne.
		<br /> <br />
		J'ai pu acquérir de nombreuses compétences grâce à plusieurs stages, mais surtout à l'issue de ma
		formation par apprentissage au CEA Paris-Saclay. J'ai également eu l'occasion de rédiger un mémoire
		sur le thème de l'open source, un sujet qui m'intéresse tout particulièrement.<br /> <br />
		Pour en savoir plus à mon sujet, je vous invite à continuer votre visite en scrollant plus bas !
	</div>
	<div class="flex justify-center py-6">
		<button class="text-center text-primary flex items-center space-x-1">
			<span> Télécharger mon CV </span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				class="fill-primary"
			>
				<path
					d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"
				/>
			</svg>
		</button>
	</div>
</div>

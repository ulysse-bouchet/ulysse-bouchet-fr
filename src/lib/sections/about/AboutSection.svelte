<script>
	import TriangleCanvas from '$lib/sections/about/TriangleCanvas.svelte';
</script>

<div id="about" class="relative bg-background rounded-b-3xl lg:rounded-t-3xl shadow-xl z-50">
	<div class="flex flex-col items-center">
		<img
			alt="Ulysse Bouchet"
			src="images/ulysse.jpg"
			class="mt-8 w-2/3 h-2/3 rounded-full aspect-square object-cover shadow-xl
			border-4 border-l-primary border-t-primary border-r-secondary border-b-secondary
			lg:w-96 lg:h-96
			2xl:size-3/5
			3xl:size-1/3"
		/>

		<!-- Infos -->
		<div class="mt-4 flex flex-col items-center">
			<span class="text-primary text-xl font-medium lg:text-2xl lg:pt-2">Ulysse Bouchet</span>
			<span class="text-secondary font-medium lg:pt-2">24 ans - Clamart (92)</span>
		</div>
	</div>

	<!-- Description -->
	<div id="description" class="mx-6 text-justify relative lg:mx-16">
		<div class="py-6 lg:py-16 flex items-center">
			<TriangleCanvas />
		</div>
		Bonjour, et bienvenue sur mon site !<br /> <br />
		Je suis un jeune ingénieur en informatique, spécialisé dans le
		<span class="text-accent font-semibold">développement web</span>. Diplômé récemment de l'Efrei Paris, je suis
		maintenant à la recherche d'un nouvel emploi dans ce domaine qui me passionne.
		<br /> <br />
		J'ai pu acquérir de nombreuses compétences grâce à mes différentes expériences : plusieurs stages, une formation par
		alternance, mais surtout un CDI à LINAGORA, durant lequel j'ai pu gagner en autonomie en tant qu'unique développeur web
		dans une équipe d'ingénieurs en IA.
		<!-- Mon manager m'a d'ailleurs fait l'honneur de rédiger une
		<a href="/" download="/" class="text-secondary font-semibold">lettre de recommandation</a>
		suite à notre collaboration.<br /> -->
		Par ailleurs, j'ai eu l'occasion de rédiger un
		<a href="Mémoire.pdf" download="Mémoire.pdf" class="text-secondary font-semibold">
			mémoire sur le thème de l'open source,
		</a>
		un sujet qui m'intéresse tout particulièrement.<br />
		<br />
		Pour en savoir plus à mon sujet, je vous invite à continuer votre visite en scrollant plus bas !
	</div>
	<div class="flex justify-center py-6 lg:py-10 lg:pb-12">
		<a href="CV.pdf" download="CV.pdf" class="text-center text-primary flex items-center space-x-1">
			<span> Télécharger mon CV </span>
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="fill-primary">
				<path
					d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"
				/>
			</svg>
		</a>
	</div>
</div>

<script>
	import Canvas from '$lib/sections/about/Canvas.svelte';
</script>

<div id="about" class="relative min-h-screen min-w-screen bg-transparent z-10">
	<div class="flex flex-col">
		<img
			alt="Ulysse Bouchet" src="ulysse.jpg"
			class="grow w-full aspect-square object-cover
		border-4 border-t-primary border-l-primary border-r-secondary">

		<!-- Infos -->
		<div class="flex items-center uppercase text-lg text-background font-bold -translate-y-1">
			<span class="grow px-6 py-2 bg-primary">Ulysse Bouchet</span>
			<span class="px-6 py-2 bg-secondary">23 ans</span>
		</div>
		<span class="px-6 py-2 -translate-y-1 bg-accent text-background uppercase font-bold">
			Développeur web
		</span>
	</div>

	<!-- Description -->
	<div class="px-6 pb-6 text-justify relative text-base">
		<div class="py-6 flex items-center">
			<Canvas />
		</div>
		Bonjour, et bienvenue sur mon site ! <br> <br>
		Je suis un jeune ingénieur en informatique, spécialisé dans le développement web.
		Fraîchement diplômé de l'Efrei Paris, je suis maintenant à la recherche d'un emploi dans ce domaine qui me
		passionne. <br> <br>
		J'ai pu acquérir de nombreuses compétences grâce à plusieurs stages, mais surtout à l'issue de ma
		formation par apprentissage au CEA Paris-Saclay. J'ai également eu l'occasion de rédiger un mémoire sur le thème de
		l'open source, un sujet qui m'intéresse tout particulièrement.<br> <br>
		Pour en savoir plus à mon sujet, je vous invite à continuer votre visite en scrollant plus bas !
	</div>
</div>
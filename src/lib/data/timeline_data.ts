export type TimelineElement = {
	time: string;
	logo: string;
	title: string;
	subtitle: string;
	description: string;
	tags?: Array<Tag>;
};

export type Tag = {
	text: string;
	link: string;
};

export const career: TimelineElement[] = [
	{
		time: '2022 - 2024',
		logo: 'cea.png',
		title: 'CEA Paris-Saclay',
		subtitle: 'Développeur Web - Alternance',
		description:
			"C'est au CEA que j'ai pu participer au développement de mon premier gros projet professionnel : Pixano. " +
			"Dans une petite équipe de développeurs, j'ai développé le front-end de cet outil d'annotation de données. " +
			"J'ai également participé à la gestion du dépôt Github du projet, ce qui m'a particulièrement inspiré pour choisir le sujet de mon mémoire. " +
			"Aujourd'hui, Pixano est utilisé par de nombreux chercheurs en IA pour développer leurs modèles de machine learning.",
		tags: [
			{ text: 'Pixano', link: 'https://pixano.cea.fr/' },
			{ text: 'Svelte', link: 'https://svelte.dev/' },
			{ text: 'TailwindCSS', link: 'https://tailwindcss.com/' },
			{ text: 'TypeScript', link: 'https://www.typescriptlang.org/' },
			{ text: 'NodeJS', link: 'https://nodejs.org/en' },
			{ text: 'Storybook', link: 'https://storybook.js.org/' },
			{ text: 'HTML', link: 'https://www.w3schools.com/html/' },
			{ text: 'CSS', link: 'https://www.w3schools.com/Css/' },
			{ text: 'Python', link: 'https://www.python.org/' },
			{ text: 'FastAPI', link: 'https://fastapi.tiangolo.com/' },
			{ text: 'Git', link: 'https://git-scm.com/' },
			{ text: 'GitHub', link: 'https://github.com/' }
		]
	},
	{
		time: 'Mai - Août 2021',
		logo: 'hitachi.svg',
		title: 'Hitachi Rail',
		subtitle: 'Développeur logiciel - Stage',
		description:
			"C'est lors de mon stage chez Hitachi que j'ai réellement pu découvrir le travail en entreprise post-confinement. " +
			"J'ai alors développé un script pour automatiser la rédaction de rapports de tests pour des trains autonomes.",
		tags: [
			{ text: 'LaTeX', link: 'https://www.latex-project.org/' },
			{ text: 'Python', link: 'https://www.python.org/' },
			{ text: 'Bash', link: 'https://www.gnu.org/software/bash/' },
			{ text: 'Git', link: 'https://git-scm.com/' },
			{ text: 'Linux', link: 'https://www.linux.org/' }
		]
	},
	{
		time: 'Mai - Juillet 2020',
		logo: 'edf.svg',
		title: 'EDF Lab Paris-Saclay',
		subtitle: 'Développeur logiciel - Stage',
		description:
			"Ma première expérience en entreprise dans le domaine de l'informatique a malheureusement été entachée par un confinement et un télétravail pendant la quasi-intégralité du stage. " +
			"Sous la supervision d'un chercheur, j'ai étudié l'environnement de simulation 3D AI Habitat de Meta (Facebook). " +
			"J'avais pour objectif de déterminer la possibilité de son intégration à l'écosystème technique utilisé par EDF pour le développement d'appareils connectés.",
		tags: [
			{ text: 'Python', link: 'https://www.python.org/' },
			{ text: 'Bash', link: 'https://www.gnu.org/software/bash/' },
			{ text: 'Linux', link: 'https://www.linux.org/' }
		]
	}
];

export const school: TimelineElement[] = [
	{
		time: '2022 - 2024',
		logo: 'efrei.svg',
		title: 'Efrei Paris',
		subtitle: "École d'ingénieurs en informatique",
		description:
			"Mes anciens camarades de l'IUT m'ont chaudement recommandé l'Efrei, en particulier pour ses formations par apprentissage. " +
			"J'ai ainsi rejoint le parcours Big Data & Machine learning, même si je savais ne pas vouloir continuer dans cette voie, afin de pouvoir devenir un développeur plus complet. " +
			"La formation par alternance m'a ainsi permis d'en apprendre plus sur ce domaine pendant mes cours, tout en commençant ma carrière dans le développement web grâçe à l'alternance. " +
			"J'ai également pu vivre une expérience à l'étranger lors d'un séjour linguistique en Corée d'une durée de 3 mois."
	},
	{
		time: '2020 - 2022',
		logo: 'ensiie.png',
		title: 'ENSIIE',
		subtitle: "École d'ingénieurs en informatique",
		description:
			"D'abord intéressé par le développement de jeux vidéo, j'ai rejoint cette école qui proposait un parcours adapté. " +
			"Je me suis ensuite rendu compte que ce n'était pas ce que je souhaitais faire de ma vie, j'ai alors décidé de rejoindre une autre école, l'Efrei, pour suivre une formation par alternance. " +
			"Durant mon passage à l'ENSIIE, j'ai tout de même pu consolider les connaissances acquises lors de mon DUT."
	},
	{
		time: '2018 - 2020',
		logo: 'iut-paris.png',
		title: 'I.U.T. Paris Descartes',
		subtitle: 'Institut Universitaire de Technologie',
		description:
			"Mes années à l'IUT sont celles qui ont réellement forgé le développeur que je suis devenu. " +
			"J'ai pu découvrir de nombreux aspects de l'informatique à travers des cours et des projets variés : " +
			'développement web, logiciel et mobile, gestion de bases de données, systèmes et réseaux. ' +
			"De plus, j'ai pu assister à quelques cours de mathématiques, d'économie et de droit. " +
			"J'ai fini ma formation avec une moyenne supérieure à 16/20, ce qui m'a permis de me hisser à la 3ème place de ma promotion (~180 élèves initialement)."
	}
];

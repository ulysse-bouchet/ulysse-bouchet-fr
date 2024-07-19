export type TimelineElement = {
	time: string,
	title: string,
	subtitle: string,
	description: string,
	tags?: Array<Tag>,
}

export type Tag = {
	text: string,
	link: string,
}

export const career: TimelineElement[] = [
	{
		time: '2022 - 2024',
		title: 'CEA Paris-Saclay',
		subtitle: 'Développeur Web - Alternance',
		description: 'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. ' +
			'It played a pivotal role in establishing desktop publishing as a general office function. ' +
			'The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; ' +
			'it came with a keyboard and single-button mouse.',
		tags: [
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
		title: 'Hitachi Rail',
		subtitle: 'Développeur logiciel - Stage',
		description: 'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. ' +
			'It played a pivotal role in establishing desktop publishing as a general office function. ' +
			'The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; ' +
			'it came with a keyboard and single-button mouse.'
	},
	{
		time: 'Mai - Juillet 2020',
		title: 'EDF Lab Paris-Saclay',
		subtitle: 'Développeur logiciel - Stage',
		description: 'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. ' +
			'It played a pivotal role in establishing desktop publishing as a general office function. ' +
			'The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; ' +
			'it came with a keyboard and single-button mouse.'
	}
];

export const school: TimelineElement[] = [
	{
		time: '2022 - 2024',
		title: 'Efrei Paris',
		subtitle: 'École d\'ingénieurs en informatique',
		description: 'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. ' +
			'It played a pivotal role in establishing desktop publishing as a general office function. ' +
			'The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; ' +
			'it came with a keyboard and single-button mouse.'
	},
	{
		time: '2020 - 2022',
		title: 'ENSIIE',
		subtitle: 'École d\'ingénieurs en informatique',
		description: 'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. ' +
			'It played a pivotal role in establishing desktop publishing as a general office function. ' +
			'The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; ' +
			'it came with a keyboard and single-button mouse.'
	},
	{
		time: '2018 - 2020',
		title: 'I.U.T. Paris Descartes',
		subtitle: 'Institut Universitaire de Technologie',
		description: 'Mes années à l\'IUT sont celles qui ont réellement forgé le développeur que je suis devenu. ' +
			'J\'ai pu découvrir de nombreux aspects de l\'informatique à travers des cours et des projets variés : ' +
			'développement web, logiciel et mobile, gestion de bases de données, systèmes et réseaux. ' +
			'De plus, j\'ai pu assister à quelques cours de mathématiques, d\'économie et de droit. ' +
			'J\'ai fini ma formation avec une moyenne supérieure à 16/20, ce qui m\'a permis de me hisser à la 3ème place de ma promo (~180 élèves initialement).'
	}
];


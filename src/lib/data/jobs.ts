// Array containing all the jobs information
export const jobs = [
	{
		id: 1,
		company: 'CEA Paris Saclay',
		icon: 'cea.jpg',
		title: 'Software Engineer (Apprenticeship)',
		date: '2022 - 2024',
		description: `As part of a small team, I participated in the development of Pixano, an open-source image annotation and exploration tool. 
        As of today, Pixano is used by a lot of AI researchers at CEA to develop their machine learning models.`,
		tags: [
			{ tag: 'Svelte', link: 'https://svelte.dev/' },
			{ tag: 'TypeScript', link: 'https://www.typescriptlang.org/' },
			{ tag: 'Tailwind', link: 'https://tailwindcss.com/' },
			{ tag: 'NodeJS', link: 'https://nodejs.org/en' },
			{ tag: 'Storybook', link: 'https://storybook.js.org/' },
			{ tag: 'HTML', link: 'https://www.w3schools.com/html/' },
			{ tag: 'CSS', link: 'https://www.w3schools.com/Css/' },
			{ tag: 'Python', link: 'https://www.python.org/' },
			{ tag: 'FastAPI', link: 'https://fastapi.tiangolo.com/' },
			{ tag: 'Git', link: 'https://git-scm.com/' }
		]
	},
	{
		id: 2,
		company: 'Hitachi Rail',
		icon: 'hitachi.svg',
		title: 'Software Developer (Internship)',
		date: 'May - August 2021',
		description: `Under the supervision of my manager, I created a tool to automate the writing of test reports.
        I parsed the output of thousands of tests run on a software to generate more readable PDF documents.`,
		tags: [
			{ tag: 'LaTeX', link: 'https://www.latex-project.org/' },
			{ tag: 'Python', link: 'https://www.python.org/' },
			{ tag: 'Bash', link: 'https://www.gnu.org/software/bash/' },
			{ tag: 'Git', link: 'https://git-scm.com/' },
			{ tag: 'Ubuntu', link: 'https://ubuntu.com/' }
		]
	},
	{
		id: 3,
		company: 'EDF Lab Paris Saclay',
		icon: 'edf.svg',
		title: 'Software Developer (Internship)',
		date: 'May - July 2020',
		description: `Under the supervision of a researcher, I studied Meta's AI Habitat tool to determine whether it could be integrated into EDF's stack.`,
		tags: [
			{ tag: 'Python', link: 'https://www.python.org/' },
			{ tag: 'Bash', link: 'https://www.gnu.org/software/bash/' },
			{ tag: 'Ubuntu', link: 'https://ubuntu.com/' }
		]
	}
];

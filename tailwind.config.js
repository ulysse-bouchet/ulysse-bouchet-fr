/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'text': '#0e0c0d',
				'background': '#f7f5f6',
				'primary': '#6366f1',
				'primary-background': '#d3d6ff',
				'secondary': '#a855f7',
				'accent': '#ec4899'
			},
			fontSize: {
				sm: '0.875rem',
				base: '1rem',
				xl: '1.333rem',
				'2xl': '1.777rem',
				'3xl': '2.369rem',
				'4xl': '3.158rem',
				'5xl': '4.210rem'
			},
			fontFamily: {
				heading: 'Inter',
				body: 'Inter'
			},
			fontWeight: {
				normal: '400',
				bold: '700'
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					'primary': '#6366f1',
					/*'primary-content': '#030414',*/
					'secondary': '#a855f7',
					/*'secondary-content': '#0a0215',*/
					'accent': '#ec4899',
					/*'accent-content': '#130208',*/
					/*'neutral': '#ff00ff',*/
					/*'neutral-content': '#160016',*/
					'base-100': '#f7f5f6',
					/*'base-200': '#d7d5d6',*/
					/*'base-300': '#b7b6b7',*/
					/*'base-content': '#0e0c0d',*/
					/*'info': '#0000ff',*/
					/*'info-content': '#c6dbff',*/
					/*'success': '#00ff00',*/
					/*'success-content': '#001600',*/
					/*'warning': '#00ff00',*/
					/*'warning-content': '#001600',*/
					/*'error': '#ff0000',*/
					/*'error-content': '#160000'*/
				}
			}
		]
	},
	plugins: [
		require('daisyui')
	]
};


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: '#363524',
				background: '#F6EFEB',
				primary: '#0E9594',
				'primary-background': '#BFDADA',
				secondary: '#773686',
				'secondary-background': '#CAAACF',
				accent: '#EE6055',
				'accent-background': '#FFCABF'
			},
			fontSize: {
				sm: '0.875rem',
				base: '0.95rem',
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
			},
			screens: {
				xxl: { min: '2160px' },
				'max-lg': { max: '1023px' }
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6366f1',
					/*'primary-content': '#030414',*/
					secondary: '#a855f7',
					/*'secondary-content': '#0a0215',*/
					accent: '#ec4899',
					/*'accent-content': '#130208',*/
					/*'neutral': '#ff00ff',*/
					/*'neutral-content': '#160016',*/
					'base-100': '#f7f5f6'
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
	plugins: [require('daisyui')]
};

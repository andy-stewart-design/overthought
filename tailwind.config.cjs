/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Andy Sans', ...defaultTheme.fontFamily.sans],
			mono: ['Andy mono', ...defaultTheme.fontFamily.mono]
		},
		extend: {
			borderWidth: {
				1.5: '1.5px'
			},
			colors: {
				foreground: 'rgb(var(--foreground) / <alpha-value>)',
				'surface-high': 'rgb(var(--surface-high) / <alpha-value>)',
				'surface-mid': 'rgb(var(--surface-mid) / <alpha-value>)',
				'surface-low': 'rgb(var(--surface-low) / <alpha-value>)',
				background: 'rgb(var(--background) / <alpha-value>)',
				black: 'rgb(var(--black) / <alpha-value>)',
				gray: {
					50: 'rgb(var(--gray-50) / <alpha-value>)',
					100: 'rgb(var(--gray-100) / <alpha-value>)',
					200: 'rgb(var(--gray-200) / <alpha-value>)',
					300: 'rgb(var(--gray-300) / <alpha-value>)',
					400: 'rgb(var(--gray-400) / <alpha-value>)',
					500: 'rgb(var(--gray-500) / <alpha-value>)',
					600: 'rgb(var(--gray-600) / <alpha-value>)',
					700: 'rgb(var(--gray-700) / <alpha-value>)',
					800: 'rgb(var(--gray-800) / <alpha-value>)',
					900: 'rgb(var(--gray-900) / <alpha-value>)'
				}
			},
			opacity: {
				15: '.15',
				85: '.85'
			},
			screens: {
				xs: '480px',
				'supports-hover': { raw: '(hover: hover)' }
			},
			spacing: {
				18: '4.5rem',
				22: '5.5rem',
				30: '7.5rem',
				34: '7.5rem'
			}
		}
	},

	plugins: [
		plugin(({ addVariant }) => {
			addVariant('active', '.active&');
		})
	]
};

module.exports = config;

/** @type {import('tailwindcss').Config} */
import { fontFamily, spacing } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Andy Sans', ...fontFamily.sans],
			mono: ['Andy mono', ...fontFamily.mono]
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
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
				65: '.65',
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
				34: '7.5rem',
				xs: spacing[2],
				sm: spacing[4],
				md: spacing[10],
				lg: spacing[20],
				xl: spacing[30],
				hero: spacing[64]
			},
			transitionTimingFunction: {
				'in-2': 'cubic-bezier(0.32, 0, 0.67, 0)',
				'out-2': 'cubic-bezier(0.33, 1, 0.68, 1)',
				'in-out-2': 'cubic-bezier(0.65, 0, 0.35, 1)',
				'in-3': 'cubic-bezier(0.5, 0, 0.75, 0)',
				'out-3': 'cubic-bezier(0.25, 1, 0.5, 1)',
				'in-out-3': 'cubic-bezier(0.76, 0, 0.24, 1)',
				'in-5': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-5': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'in-out-5': 'cubic-bezier(0.87, 0, 0.13, 1)'
			}
		}
	},

	plugins: [
		plugin(({ addVariant }) => {
			addVariant('active', '.active&');
			addVariant('can-hover', '@media (hover: hover) {body &}');
			addVariant('cannot-hover', '@media (hover: none) {body &}');
		}),
		({ addUtilities }) => {
			addUtilities({
				'.border-light': {
					'@apply border-foreground/15': {}
				},
				'.border-xlt': {
					'@apply border-foreground/5': {}
				},
				'.px-app': {
					'@apply px-2 md:px-8': {}
				}
			});
		}
	]
};

module.exports = config;

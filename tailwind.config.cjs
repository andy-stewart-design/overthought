const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
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
			}
		}
	},

	plugins: []
};

module.exports = config;

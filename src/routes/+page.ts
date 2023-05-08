import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		meta: {
			title: 'Andy Stewart | Design + Code',
			description:
				'I’m Andy Stewart, a designer working at the intersection of brand and technology. Currently slinging pixels at Turnstyle in Seattle, WA.'
		}
	};
};

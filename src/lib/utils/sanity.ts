import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
	projectId: 'yjixzy6d',
	dataset: 'production',
	apiVersion: '2022-02-01',
	useCdn: false
});

// export const builder = imageUrlBuilder(client);

// export function urlFor(source: string) {
// 	const src = builder.image(source);
// 	return src;
// }

export function setSrc(slug: string, sizes: number | number[], blur = false) {
	if (typeof sizes !== 'number') {
		// const URLs = sizes.map((width) => urlFor(slug).width(width).auto('format').url());
		const URLs = sizes.map(
			(width) => `${slug}?w=${width}&auto=format${blur ? '&blur=200' : ''} ${width}w`
		);
		return URLs.join(', ');
	} else {
		// return urlFor(slug).width(sizes).auto('format').url();
		return `${slug}?w=${sizes}&auto=format`;
	}
}

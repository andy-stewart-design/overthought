import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: 'yjixzy6d',
	dataset: 'production',
	apiVersion: '2022-02-01',
	useCdn: false
});

export const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
	const src = builder.image(source);
	return src;
}

export function setSrc(slug: string, sizes: number | number[]) {
	if (typeof sizes !== 'number') {
		const URLs = sizes.map((width) => urlFor(slug).width(width).auto('format').url());
		return URLs.join(', ');
	} else {
		return urlFor(slug).width(sizes).auto('format').url();
	}
}

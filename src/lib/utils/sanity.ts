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

export const feed_query = `*[_type == "feed"]{
	"id": _id,
	client,
	"title": project,
	date,
	projectType,
	"mediaType": upper(mediaType),
	...select(mediaType == 'image' => {
		"src": {
			"feed": thumbnailImage.asset->url,
			"overlay": coalesce(featuredImage.asset->url, thumbnailImage.asset->url),
		},
		"srcSet": {
			"feed": thumbnailImage.asset->url,
			"overlay": coalesce(featuredImage.asset->url, thumbnailImage.asset->url),
		},
		"alt": thumbnailImage.alt,
	}),
	...select(mediaType == 'video' => {
		"src": {
			"feed": thumbnailVideo.link,
			"overlay": coalesce(featuredVideo.link, thumbnailVideo.link),
		},
		"poster": {
			"feed": thumbnailVideo.poster.asset->url,
			"overlay": coalesce(featuredVideo.poster.asset->url, thumbnailVideo.poster.asset->url),
		},
	}),
}`;

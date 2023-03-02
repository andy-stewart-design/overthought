import { client } from '$lib/utils/sanity';
import type { PageServerLoad } from './$types';
import { setSrc } from '$lib/utils/sanity';

export const prerender = true;

interface FeedMediaSource {
	feed: string;
	overlay: string;
}

interface FeedMedia {
	index?: number;
	id: string;
	client: string;
	title: string;
	date: string;
	projectType: string;
	src: FeedMediaSource;
}

export interface FeedImage extends FeedMedia {
	mediaType: 'IMAGE';
	srcSet: FeedMediaSource;
	alt: string;
}

export interface FeedVideo extends FeedMedia {
	mediaType: 'VIDEO';
	poster: FeedMediaSource;
}

export const load: PageServerLoad = async ({ setHeaders }) => {
	const getData = async () => {
		const feed_query = `*[_type == "feed"]{
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

		const data: (FeedImage | FeedVideo)[] = await client.fetch(feed_query);

		const chron_data = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		const processed_data: (FeedImage | FeedVideo)[] = chron_data.map((project, index) => {
			project.projectType = project.projectType.split('-').join(' ');

			if (project.mediaType === 'IMAGE') {
				project.src.feed = setSrc(project.src.feed, 1200);
				project.srcSet.feed = setSrc(project.srcSet.feed, [600, 800, 1200]);

				project.src.overlay = setSrc(project.src.overlay, 2000);
				project.srcSet.feed = setSrc(project.srcSet.feed, [800, 1200, 1600, 2000]);
			} else if (project.mediaType === 'VIDEO') {
				const cloudName = 'v1676297405';
				const cloudSrc = `https://res.cloudinary.com/andystewartdesign/video/upload/f_auto,q_auto/${cloudName}`;

				project.src.feed = cloudSrc + project.src.feed;
				project.src.overlay = cloudSrc + project.src.overlay;
				project.poster.feed = setSrc(project.poster.feed, [600, 800, 1200]);
				project.poster.overlay = setSrc(project.poster.feed, [600, 800, 1200]);
			}

			return { ...project, index };
		});

		return processed_data;
	};

	// setHeaders({
	// 	'Cache-Control': 'max-age=3600'
	// });

	return {
		projects: getData()
	};
};

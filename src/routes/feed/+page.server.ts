import { client, feed_query, setSrc } from '$lib/utils/sanity';
import type { PageServerLoad } from './$types';

export const prerender = true;

// export const config = {
// 	isr: {
// 		expiration: 60 * 60 * 24
// 	}
// };

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
		const data: (FeedImage | FeedVideo)[] = await client.fetch(feed_query);

		const chronological_data = data.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);

		return chronological_data.map((project, index): FeedImage | FeedVideo => {
			project.projectType = project.projectType.split('-').join(' ');

			if (project.mediaType === 'IMAGE') {
				project.src.feed = setSrc(project.src.feed, 1200);
				project.src.overlay = setSrc(project.src.overlay, 2000);

				project.srcSet.feed = setSrc(project.srcSet.feed, [600, 800, 1200]);
				project.srcSet.overlay = setSrc(project.srcSet.overlay, [800, 1200, 1600, 2000]);
			} else if (project.mediaType === 'VIDEO') {
				const cloudName = 'v1676297405';
				const cloudSrc = `https://res.cloudinary.com/andystewartdesign/video/upload/f_auto,q_auto/${cloudName}`;

				project.src.feed = cloudSrc + project.src.feed;
				project.src.overlay = cloudSrc + project.src.overlay;
				project.poster.feed = setSrc(project.poster.feed, 1920);
				project.poster.overlay = setSrc(project.poster.overlay, 1920);
			}

			return { ...project, index };
		});
	};

	return {
		projects: getData()
	};
};

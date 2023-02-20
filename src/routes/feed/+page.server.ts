// @ts-nocheck

import { client } from '$lib/utils/sanity';
import type { PageServerLoad } from './$types';

export const prerender = true;

export interface FeedImage {
	src: string;
	width: string;
	height: string;
	ratio: string;
	alt: string;
}

export interface FeedVideo {
	src: string;
	poster: FeedImage;
}

export interface FeedProject {
	index?: number;
	id: string;
	client: string;
	projectType: string;
	title: string;
	mediaType: 'image' | 'video';
	featuredImage?: FeedImage;
	thumbnailImage?: FeedImage;
	featuredVideo?: FeedVideo;
	thumbnailVideo?: FeedVideo;
	date: string;
}

export const load: PageServerLoad = async () => {
	const getData = async () => {
		const data: FeedProject[] = await client.fetch(`*[_type == "feed"]{
            "id": _id,
            client,
            projectType,
            "title": project,
            mediaType,
            date,
            ...select(mediaType == 'image' => {
                "thumbnailImage": {
                    "src": thumbnailImage.asset->url,
                    "originalFilename": thumbnailImage.asset -> originalFilename,
                    "width": thumbnailImage.asset->.metadata.dimensions.width,
                    "height": thumbnailImage.asset->.metadata.dimensions.height,
                    "ratio": thumbnailImage.asset->.metadata.dimensions.aspectRatio,
                    "alt": thumbnailImage.alt,
                },
                "featuredImage": {
                    "src": featuredImage.asset->url,
                    "originalFilename": featuredImage.asset -> originalFilename,
                    "width": featuredImage.asset->.metadata.dimensions.width,
                    "height": featuredImage.asset->.metadata.dimensions.height,
                    "ratio": featuredImage.asset->.metadata.dimensions.aspectRatio,
                    "alt": featuredImage.alt,
                },
            }),
            ...select(mediaType == 'video' => {
                "thumbnailVideo": {
                    "src": thumbnailVideo.link,
                    "poster": {
                        "src": thumbnailVideo.poster.asset->url,
                        "originalFilename": thumbnailVideo.poster.asset -> originalFilename,
                        "width": thumbnailVideo.poster.asset->.metadata.dimensions.width,
                        "height": thumbnailVideo.poster.asset->.metadata.dimensions.height,
                        "ratio": thumbnailVideo.poster.asset->.metadata.dimensions.aspectRatio,
                    },
                },
                "featuredVideo": {
                    "src": featuredVideo.link,
                    "poster": {
                        "src": featuredVideo.poster.asset->url,
                        "originalFilename": featuredVideo.poster.asset -> originalFilename,
                        "width": featuredVideo.poster.asset->.metadata.dimensions.width,
                        "height": featuredVideo.poster.asset->.metadata.dimensions.height,
                        "ratio": featuredVideo.poster.asset->.metadata.dimensions.aspectRatio,
                    },
                },
            }),
        }`);

		const chronData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

		const cleanData = chronData.map((project, index) => {
			project.projectType = project.projectType.split('-').join(' ');
			return { ...project, index };
		});

		return cleanData.reverse();
	};

	return {
		projects: getData()
	};
};

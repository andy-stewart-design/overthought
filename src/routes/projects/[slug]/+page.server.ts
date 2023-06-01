import type { PageServerLoad } from "./$types";
import projectData from "@content/projects.json";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = ({ params }) => {
	const { slug } = params;
	const projects = projectData.entries as CaseStudy[];

	const [project] = projects.filter((p) => p.metadata.link?.href === slug);

	if (!project) {
		throw error(404, {
			message: "Not found",
		});
	}

	const { content, metadata } = project;

	if (!content) {
		throw error(404, {
			message: "Not found",
		});
	}

	return {
		metadata,
		content,
	};
};

type MediaType = "image" | "video";

interface CaseStudyMetadata {
	client: string;
	summary: string;
	tags: string[];
	year: number;
	status: string;
	link: {
		text: string;
		href: string;
		external: boolean;
	};
	img: {
		src: string;
		alt: string;
	};
	featured: boolean;
}

interface CaseStudyMedia {
	type: MediaType;
	src: string;
}

interface CaseStudyImage extends CaseStudyMedia {
	type: "image";
	alt: string;
}

interface CaseStudyVideo extends CaseStudyMedia {
	type: "video";
	poster: string;
	autoplay: boolean;
}

interface CaseStudyContent {
	headline: string;
	description: string;
	scope: string[];
	partners: {
		type: string;
		name: string;
		href: string;
	}[];
	liveLink: string;
	media: (CaseStudyImage | CaseStudyVideo)[];
}

interface CaseStudy {
	metadata: CaseStudyMetadata;
	content?: CaseStudyContent;
}

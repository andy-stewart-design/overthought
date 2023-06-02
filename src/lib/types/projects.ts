export type MediaType = "image" | "video";

export interface CaseStudyMetadata {
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

export interface CaseStudyMedia {
	type: MediaType;
	src: string;
}

export interface CaseStudyImage extends CaseStudyMedia {
	type: "image";
	alt: string;
	cloud: boolean;
}

export interface CaseStudyVideo extends CaseStudyMedia {
	type: "video";
	poster: string;
	autoplay: boolean;
}

export interface CaseStudyContent {
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

export interface CaseStudy {
	metadata: CaseStudyMetadata;
	content?: CaseStudyContent;
}

export interface FeedPost {
	title: string;
	body: string;
	date: string;
	img?: {
		src: string;
		alt: string;
	};
	video?: {
		src: string;
		poster: string;
	};
	link?: {
		text: string;
		href: string;
		external?: boolean;
	};
	categories?: string[];
}

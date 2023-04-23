export interface FeedPost {
	title: string;
	body: string;
	date: string;
	img?: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	};
	video?: {
		src: string;
		poster: string;
		width?: number;
		height?: number;
	};
	link?: {
		text: string;
		href: string;
		external?: boolean;
	};
	categories?: string[];
}

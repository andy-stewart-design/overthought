// import { dev } from '$app/environment';

export function setCloudSrc(slug: string, sizes: number | number[]) {
	const baseURL = 'https://res.cloudinary.com/andystewartdesign/image/upload';
	const cloudID = 'v1676240804';
	// if (dev) return `img${slug}`;
	if (typeof sizes !== 'number') {
		const URLs = sizes.map(
			(width) => `${baseURL}/w_${width}/f_auto,q_auto/${cloudID}${slug} ${width}w`
		);
		return URLs.join(', ');
	} else {
		return `${baseURL}/w_${sizes}/f_auto,q_auto/${cloudID}/${slug}`;
	}
}

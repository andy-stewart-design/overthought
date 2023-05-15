export function setSizes(sizes: string | ((string | number)[] | string)[]) {
	if (typeof sizes !== 'string' && sizes.length) {
		const sizesArray = sizes.map((size) => {
			if (size.length !== 2) return size.toString();
			return `(max-width: ${size[0]}) ${size[1]}`;
		});
		return sizesArray.join(', ');
	} else if (typeof sizes === 'string') {
		return sizes;
	}
}



interface Props {
	targetNode?: HTMLElement | null;
	escapeCallback?: () => void | null;
	arrowLeftCallback?: () => void | null;
	arrowRightCallback?: () => void | null;
}

export const focusTrap = (node: HTMLElement, props?: Props) => {
	let targetNode = props?.targetNode;
	if (!targetNode) targetNode = node;
	const focusableEls: NodeListOf<HTMLElement> = targetNode.querySelectorAll(
		'a:not(.hidden, .pointer-events-none), button:not([disabled])'
	);

	let firstFocusableEl: HTMLElement, lastFocusableEl: HTMLElement;
	if (focusableEls) {
		firstFocusableEl = focusableEls[0];
		lastFocusableEl = focusableEls[focusableEls.length - 1];
	} else throw new Error('No focusable elements found');

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.shiftKey) {
			if (e.key === 'Tab' && document.activeElement === firstFocusableEl) {
				e.preventDefault();
				lastFocusableEl.focus();
			}
		} else if (e.key === 'Tab' && document.activeElement === lastFocusableEl) {
			e.preventDefault();
			firstFocusableEl.focus();
		} else if (props?.escapeCallback && e.key === 'Escape') {
			e.preventDefault();
			props.escapeCallback();
		} else if (props?.arrowLeftCallback && e.key === 'ArrowLeft') {
			e.preventDefault();
			props.arrowLeftCallback();
		} else if (props?.arrowRightCallback && e.key === 'ArrowRight') {
			e.preventDefault();
			props.arrowRightCallback();
		}
	};
	window.addEventListener('keydown', handleKeydown);
	lastFocusableEl.focus();

	return {
		destroy() {
			window.removeEventListener('keydown', handleKeydown);
		}
	};
};

export const getScrollDistance = (): number => {
	const scrolledDistance = window.scrollY;
	const scrollableHeight = document.body.scrollHeight - window.innerHeight;

	if (scrollableHeight === 0) return 0;

	const scrollPercentage = Math.round((scrolledDistance / scrollableHeight) * 100);

	return Math.min(Math.max(scrollPercentage, 0), 100);
};

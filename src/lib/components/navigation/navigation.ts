/**
 * Function to calculate the total scrolled distance in % of the page
 * @returns an integer containing the page scroll %
 */
export const getScrollDistance = (): number => {
	const scrolledDistance: number = window.scrollY;
	const scrollableHeight: number = document.body.scrollHeight - window.innerHeight;

	if (scrollableHeight === 0) return 0;

	const scrollPercentage: number = Math.round((scrolledDistance / scrollableHeight) * 100);

	return Math.min(Math.max(scrollPercentage, 0), 100);
};

import { useEffect, useState } from 'react';

const sizes = {
	smallMobile: 375,
	mobile: 480,
	tablet: 990,
	laptop: 1024,
	desktop: 1440,
};

const minWidthQuery = (width) => `@media (min-width: ${width}px)`;

export const from = Object.keys(sizes).reduce(
	(acc, key) => ({
		...acc,
		[key]: minWidthQuery(sizes[key]),
	})
);

export const useMediaQuery = (query) => {
	const mediaQuery = query.replace('@media', '').trim();
	
	const [match, setMatch] = useState(
		// eslint-disable-next-line no-undef
		() => window.matchMedia(mediaQuery).matches,
	);
	
	useEffect(() => {
		// eslint-disable-next-line no-undef
		const mediaQueryList = window.matchMedia(mediaQuery);
		
		const handleChange = (event) =>
			setMatch(event.matches);
		
		mediaQueryList.addEventListener('change', handleChange);
		return () => mediaQueryList.removeEventListener('change', handleChange);
	}, [mediaQuery]);
	
	return match;
};

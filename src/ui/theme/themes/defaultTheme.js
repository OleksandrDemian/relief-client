const generateColorsFromHue = (h, s, l) => [`hsl(${h}, ${s}%, ${l}%)`, `hsl(${h}, ${s}%, ${l+12}%)`, `hsl(${h}, ${s}%, ${l-12}%)`];

const fontSizes = {
	mobile: {
		heading: "1.85rem",
		title: "1.3rem",
		text: "1.1rem",
		subtext: "0.9rem"
	},
	desktop: {
		heading: "1.75rem",
		title: "1.2rem",
		text: "1rem",
		subtext: "0.8rem"
	}
};

const HUE = {
	primary: [240, 40, 54],
	secondary: [201, 85, 54],
	error: [345, 85, 54],
	success: [150, 75, 50],
	warning: [35, 95, 60],

	rand: [225, 46, 32],
};

const colors = {
	text: "#262b41",
	border: "#e0e0e0",
	borderActive: "cornflowerblue",

	menuBackground: "#f5f5fb",
	cardBackground: "white",
	primary: generateColorsFromHue(...HUE.primary),
	secondary: generateColorsFromHue(...HUE.secondary),
	error: generateColorsFromHue(...HUE.error),
	success: generateColorsFromHue(...HUE.success),
	warning: generateColorsFromHue(...HUE.warning)
};

const border = {
	radius: "0.4rem",
	color: colors.border,
	width: "1px"
};

const shadow = {
	button: "0px 4px 8px rgba(0,0,0,0.12)",
	main: "0px 8px 16px rgba(0,0,0,0.08)",
}

const defaultTheme = (isDesktop) => ({
	font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",

	colors,
	border,
	shadow,
	fontSizes: isDesktop ? fontSizes.desktop : fontSizes.mobile,

	section: {
		padding: isDesktop ? "1.8rem" : "1rem"
	},

	misc: {
		border: `${border.width} solid ${border.color}`
	}
});

export default defaultTheme;

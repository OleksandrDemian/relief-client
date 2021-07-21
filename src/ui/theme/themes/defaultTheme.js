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

const colors = {
	text: "black",
	border: "#e0e0e0",
	borderActive: "cornflowerblue",

	menuBackground: "#f5f5fb",
	cardBackground: "white",
	primary: ["#6256bf", "#7e72dd"],
	secondary: ["#4fa0fe", "#6bafff"],
	error: ["#fe637e", "#ff8297"],
	success: ["#39daba", "#54dfc3"],
	warning: ["#ffbb5b", "#ffc878"],
};

const border = {
	radius: "0.4rem",
	color: colors.border,
	width: "1px"
};

const shadow = {
	main: "0px 4px 8px rgba(0,0,0,0.12)"
}

const defaultTheme = (isDesktop) => ({
	font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",

	colors,
	border,
	shadow,
	fontSizes: isDesktop ? fontSizes.desktop : fontSizes.mobile,

	section: {
		padding: "1.8rem"
	},

	misc: {
		border: `${border.width} solid ${border.color}`
	}
});

export default defaultTheme;

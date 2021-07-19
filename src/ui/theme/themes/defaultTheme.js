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

	primary: ["#6256bf", "#7e72dd"],
	secondary: ["#0099bf", "#01b1dd"],
	error: ["#bf3d48", "#e0505c"],
	success: ["#1fbf57", "#2ee56e"],
	warning: ["#fd8724", "#ff9a47"],
};

const border = {
	radius: "0.4rem",
	color: colors.border,
	width: "1px"
};

const defaultTheme = (isDesktop) => ({
	font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",

	colors,
	border,
	fontSizes: isDesktop ? fontSizes.desktop : fontSizes.mobile,

	section: {
		padding: "1.8rem"
	},

	misc: {
		border: `${border.width} solid ${border.color}`
	}
});

export default defaultTheme;

import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import defaultTheme from "./themes/defaultTheme";
import GlobalStyle from "./global";
import {from, useMediaQuery} from "../../hooks/useMediaQuery";

const Themed = ({ children }) => {
	const isDesktop = useMediaQuery(from.tablet);
	return (
		<ThemeProvider theme={defaultTheme(isDesktop)}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

Themed.propTypes = {
	children: PropTypes.node
};

export default Themed;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  max-width: 100%;
  min-height: 100vh;
`;

const Layout = ({children}) => (
	<LayoutContainer>
		{children}
	</LayoutContainer>
);

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: start;
  flex-direction: column;
  overflow: auto;
  max-height: 100vh;
`;

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;

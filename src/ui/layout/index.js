import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LayoutContainer = styled.div`
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
  align-items: center;
  flex-direction: column;
  overflow: auto;
  max-height: 100vh;
  margin-left: 250px;
`;

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;

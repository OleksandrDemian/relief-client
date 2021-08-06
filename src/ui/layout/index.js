import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {from} from "../../hooks/useMediaQuery";

const LayoutContainer = styled.div`
  display: grid;
  max-width: 52.5rem;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;

  grid-template-columns: 3.75rem minmax(20rem, 45rem) 3.75rem;
  ${from.appMaxWidth} {
    grid-template-columns: 15rem 1fr 15rem;
    width: 75rem;
    max-width: 75rem;
  }
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
`;

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;

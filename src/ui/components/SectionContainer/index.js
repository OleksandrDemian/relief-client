import React from "react";
import {Container, InnerContainer} from "./styled";
import PropTypes from "prop-types";

const SectionContainer = ({ children, id, ...props }) => {
	return (
		<Container id={id} {...props}>
			<InnerContainer>
				{children}
			</InnerContainer>
		</Container>
	);
};

SectionContainer.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string
};

export default SectionContainer;

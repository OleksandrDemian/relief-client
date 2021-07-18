import styled, {css} from "styled-components";

export const ProjectPreviewContainer = styled.div`
	${({theme}) => css`
	  border: ${theme.misc.border};
	  border-radius: ${theme.border.radius};
	  padding: 1rem;
	`}
`;

export const ProjectPreviewTitle = styled.h2`
	margin: 0;
`;

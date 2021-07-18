import styled, {css} from "styled-components";

export const TestPreviewContainer = styled.div`
  padding: 1rem;
  ${({theme}) => css`
	border-radius: ${theme.border.radius};
	border: ${theme.misc.border};
  `}
`;

import styled, {css} from "styled-components";

export const EnvironmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EnvironmentContainer = styled.div`
  padding: 1rem;
  ${({theme}) => css`
    border: ${theme.misc.border};
	border-radius: ${theme.border.radius};
  `}
`;

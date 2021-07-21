import styled, {css} from "styled-components";

export const ColumnForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1rem;
  ${({theme}) => css`
    background-color: ${theme.colors.menuBackground};
	border-radius: ${theme.border.radius};
  `}
`;

import styled, {css} from "styled-components";

export const CardContainer = styled.div`
  ${({theme}) => css`
    border-radius: ${theme.border.radius};
    border: ${theme.misc.border};
    padding: 1rem;
    background-color: ${theme.colors.cardBackground};
  `}
`;

export const CardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

import styled, {css} from "styled-components";

export const CardContainer = styled.div`
  ${({theme}) => css`
    border: ${theme.misc.border};
    border-radius: ${theme.border.radius};
    padding: 1rem;
  `}
`;

export const CardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

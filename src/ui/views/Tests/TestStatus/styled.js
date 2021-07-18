import styled, {css} from "styled-components";

export const TestStatusesContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TestStatusContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 0.5rem;
  ${({theme}) => css`
    border: ${theme.misc.border};
    border-radius: ${theme.border.radius};
  `}
`;

import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const TestsTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const TestRowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  ${({theme}) => css`
    border: ${theme.misc.border};
	border-radius: ${theme.border.radius};
  `}
`;

export const TestRowDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TestRowTitleLink = styled(Link)`
  text-decoration: none;
`;

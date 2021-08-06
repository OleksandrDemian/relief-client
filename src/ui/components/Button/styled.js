import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const BASE_BUTTON_STYLE = css`
  border-radius: 0.25rem;
  border: 0.0625rem solid transparent;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: 500;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: 1.375rem;
  padding: 0.25rem 1rem;
  transition: all 0.2s ease 0s;
  gap: 0.5rem;
  align-items: center;
  ${({theme, color}) => css`
    background-color: ${theme.colors[color][0]};
    color: white;
    box-shadow: ${theme.shadow.button};
    
    :hover {
      background-color: ${theme.colors[color][1]};
    }
  `}
  
  & > svg {
    width: 1.25rem;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  ${({vSpace = 1}) => css`
    margin: ${vSpace}rem 0;
  `}
`;

export const StyledButton = styled.button`
  ${BASE_BUTTON_STYLE}
`;

export const StyledButtonLink = styled(Link)`
  text-decoration: none;
  ${BASE_BUTTON_STYLE}
`;

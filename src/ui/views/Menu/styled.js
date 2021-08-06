import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {from} from "../../../hooks/useMediaQuery";

export const MenuContainer = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({theme}) => css`
    padding: ${theme.section.padding} 0.5rem;
  `}
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyleMenuLink = styled(Link)`
  border-radius: 0.25rem;
  border: 0.0625rem solid transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: all 0.2s ease 0s;
  ${({theme}) => css`
    color: ${theme.colors.primary[0]};

    :hover {
      background-color: #E8E8FF;
    }

    & > svg {
      width: 1.75rem;
      height: 1.75rem;
      color: ${theme.colors.primary[0]};
    }
  `}

  span {
    display: none;
  }
  
  ${from.appMaxWidth} {
    span {
      display: block;
    }
  }
`;

export const ProjectsTitle = styled.span`
  font-weight: bold;
  font-size: 1.4rem;
  display: block;
`;

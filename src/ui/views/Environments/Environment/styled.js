import styled, {css} from "styled-components";
import {CardContainer} from "../../../components/Card/styled";

export const EnvironmentContainer = styled(CardContainer)``;

export const EnvironmentHead = styled.span`
  display: block;
  
  ${({theme}) => css`
    font-size: ${theme.fontSizes.title};
    font-weight: bold;
  `}
`;

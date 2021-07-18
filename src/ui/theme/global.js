import {createGlobalStyle, css} from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({theme}) => css`
    html {
      font-family: ${theme.font};
    }
  `}
`;

export default GlobalStyle;

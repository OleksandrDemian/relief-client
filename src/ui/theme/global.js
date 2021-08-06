import {createGlobalStyle, css} from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({theme}) => css`
    html {
      font-family: ${theme.font};
      color: ${theme.colors.text};
    }
  `}
`;

export default GlobalStyle;

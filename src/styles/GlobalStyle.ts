//Styles
import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

interface GlobalStyleProps {
  background: string;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${normalize()}
    *{
      margin: 0; 
      padding: 0;
    }
    body {
        background: ${(props) => props.background};
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;

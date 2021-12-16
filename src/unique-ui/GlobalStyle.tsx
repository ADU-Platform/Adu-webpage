import styled from "styled-components";

//style
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BackgroundColor, ForegroundColor } from "./types/Color";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');


  html, body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${BackgroundColor.Root};
    color: ${ForegroundColor.Dimmest}
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
      user-select: none;
  }
`;

export default GlobalStyle;

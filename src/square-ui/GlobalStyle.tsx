//style
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BackgroundColor, ForegroundColor } from "./styles/Colors";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');


  html, body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${BackgroundColor.Root};
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
      user-select: none;
  }
  span {
    color: ${ForegroundColor.Default};
  }
`;

export default GlobalStyle;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { myTheme } from "./myTheme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  //@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

  body {
    //font-family: 'Source Sans Pro', sans-serif;
    font-family: 'Open Sans', sans-serif;
    background-color: ${(p) => p.theme.bg.root};
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

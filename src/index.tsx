import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//style
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { myTheme } from "./myTheme";

//redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={myTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

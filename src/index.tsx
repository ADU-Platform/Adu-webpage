import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//styling
import GlobalStyle from "./ui/styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

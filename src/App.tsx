import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConsoleHome from "./pages/console/ConsoleHome";
import Home from "./pages/Home";
/* import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Webbox from "./pages/Webbox"; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/console" element={<ConsoleHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*

import styled from "styled-components";

const Frame = styled.div``;

function Example() {
  return <Frame></Frame>;
}

export default Example;

*/

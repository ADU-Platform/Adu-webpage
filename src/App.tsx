import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Webbox from "./components/pages/Webbox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/webbox" element={<Webbox />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

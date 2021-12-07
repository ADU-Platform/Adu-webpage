import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import Webbox from "./components/pages/Webbox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Webbox" element={<Webbox />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

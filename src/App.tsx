import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import Webbox from "./components/pages/Webbox";

import {print} from "adu-material-ui";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Workroom" element={<Home />} />
        <Route path="/Webbox" element={<Webbox />} />
        <Route path="/Webbox/:roomId" element={<Webbox />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;

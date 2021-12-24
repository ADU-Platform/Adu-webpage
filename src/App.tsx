import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import User from "./pages/User";

import Workspace_Home from "./pages/workspace/Home";
import Workspace_Projects from "./pages/workspace/Projects";

import Physicalcomputing_Home from "./pages/workspace/physicalcomputing/Home";
import Physicalcomputing_IDE from "./pages/workspace/physicalcomputing/IDE";
import Physicalcomputing_Register from "./pages/workspace/physicalcomputing/Register";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/user" element={<User />} />

        <Route path="/workspace" element={<Workspace_Home />} />
        <Route path="/workspace/projects" element={<Workspace_Projects />} />
        <Route
          path="/workspace/projects/:projectUuid"
          element={<Workspace_Projects />}
        />

        <Route
          path="/workspace/physicalcomputing/home"
          element={<Physicalcomputing_Home />}
        />
        <Route
          path="/workspace/physicalcomputing/ide"
          element={<Physicalcomputing_IDE />}
        />

        <Route
          path="/workspace/physicalcomputing/reg  ister"
          element={<Physicalcomputing_Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

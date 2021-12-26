import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//default
import HomeInDefault from "./pages/default/Home";
import SignInInDefault from "./pages/default/SignIn";
import SignUpInDefault from "./pages/default/SignUp";
import SignOutInDefault from "./pages/default/SignOut";

//design
import HomeInDesign from "./pages/design/Home";

//workspace
import HomeInWorkspace from "./pages/workspace/Home";

//etcetera
import NotFoundPage from "./pages/etcetera/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<HomeInDefault />} />
          <Route path="signin" element={<SignInInDefault />} />
          <Route path="signup" element={<SignUpInDefault />} />
          <Route path="signout" element={<SignOutInDefault />} />
        </Route>
        <Route path="/workspace">
          <Route path="" element={<HomeInWorkspace />} />
        </Route>
        <Route path="/design">
          <Route path="" element={<HomeInDesign />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

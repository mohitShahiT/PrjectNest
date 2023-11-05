import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LoggedIn from "./pages/LoggedIn";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="signup" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<LoggedIn />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

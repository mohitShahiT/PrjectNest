import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LoggedIn from "./pages/LoggedIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />;
          <Route path="home" element={<LoggedIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

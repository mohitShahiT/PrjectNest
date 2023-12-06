
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import Errorpage from "./pages/Errrorpage/Errorpage";
import Adminaddproject from "./pages/Adminaddproject/Adminaddproject";
import Admineditproject from "./pages/Admineditproject/Admineditproject";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="signup" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="admin" element={<AdminPage />}>
            <Route path="addproject" element={<Adminaddproject />} />
            <Route path="editproject" element={<Admineditproject />} />
          </Route>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

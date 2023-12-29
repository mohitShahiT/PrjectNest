import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import Errorpage from "./pages/Errrorpage/Errorpage";
import Adminaddproject from "./pages/Adminaddproject/Adminaddproject";
import Admineditproject from "./pages/Admineditproject/Admineditproject";
import AdmineditSelectedproject from "./pages/Admineditproject/AdmineditSelectedproject";
import Dashboard from "./pages/Dashboard/Dashboard";
import Chat from "./pages/Chat/Chat";
import Reports from "./pages/Reports/Reports";
import Logsheet from "./pages/Logsheet/Logsheet";
import Members from "./pages/Members/Members";
import Calendar from "./pages/Calendar/Calendar";
import EditProfile from "./pages/EditProfile/EditProfile";
import Task from "./pages/Task/Task";

import { AuthContextProvider } from "./components/LoginPage/AuthProvider/AuthProvider";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="signup" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="admin" element={<AdminPage />}>
            <Route path="addproject" element={<Adminaddproject />} />
            <Route path="editproject" element={<Admineditproject />}></Route>
            <Route
              path="editproject/:id"
              element={<AdmineditSelectedproject />}
            />
          </Route>
          <Route path="*" element={<Errorpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/logsheet" element={<Logsheet />} />
          <Route path="/members" element={<Members />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/task" element={<Task />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import Errorpage from "./pages/Errrorpage/Errorpage";
import Adminaddproject from "./pages/Adminaddproject/Adminaddproject";
import Admineditproject from "./pages/Admineditproject/Admineditproject";
import AdmineditSelectedproject from "./pages/Admineditproject/AdmineditSelectedproject";
import Dashboard from "./pages/Dashboard/Dashboard";
import Chat from "./pages/Chat/Chat";
import Gantt from "./pages/Gantt/Gantt";
import Grades from "./pages/Grades/Grades";
import Reports from "./pages/Reports/Reports";
import Logsheet from "./pages/Logsheet/Logsheet";
import Members from "./pages/Members/Members";
import EditProfile from "./pages/EditProfile/EditProfile";
import Task from "./pages/Task/Task";
import Join, { user } from "./components/Supervisor_view/Join/Join";
import { useContext } from "react";
import AuthContext from "./components/LoginPage/AuthProvider/AuthProvider";
import projectdetails from "./pages/Adminprojectsdetails/Adminprojectsdetails";

function Router() {
  const currentUser = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage signUpActive={false} signinActive={false} />}
        />
        {/* {!currentUser.user && (<> */}
        <Route
          path="signup"
          element={<LoginPage signUpActive={true} signinActive={false} />}
        />
        <Route
          path="login"
          element={<LoginPage signUpActive={false} signinActive={true} />}
        />
        {/* </>)} */}
        {/* {currentUser.user?.role === "admin" && (<> */}
        <Route path="admin" element={<AdminPage />}>
          <Route path="addproject" element={<Adminaddproject />} />
          <Route path="editproject" element={<Admineditproject />}></Route>
          <Route
            path="adminprojectdetails"
            element={<projectdetails />}
          ></Route>
          <Route
            path="editproject/:id"
            element={<AdmineditSelectedproject />}
          />
        </Route>
        {/* </>) */}
        {/* } */}

        <Route path="*" element={<Errorpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/logsheet" element={<Logsheet />} />
        <Route path="/gantt" element={<Gantt />} />
        <Route path="/members" element={<Members />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/task" element={<Task />} />
        <Route path="/join" component={Join} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import styles from "./StudentEditProfile.module.css";
import { useState, useEffect, useContext } from "react";
import StdDashboardLayout from "../../components/Student_view/StdDashboardLayout/StdDashboardLayout";
import StudentEditProfiledisplay from "./components/StudentEditProfiledisplay/StudentEditProfiledisplay";
import AuthContext from "../../components/LoginPage/AuthProvider/AuthProvider";

const StudentEditProfile = () => {
  const currentUser = useContext(AuthContext);
  return (
    <StdDashboardLayout title="Edit Profile" user={currentUser.user}>
      <StudentEditProfiledisplay />
    </StdDashboardLayout>
  );
};

export default StudentEditProfile;

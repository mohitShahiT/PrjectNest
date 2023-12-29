import styles from "./EditProfile.module.css";
import { useState, useEffect, useContext } from "react";
import DashboardLayout from "../../components/Supervisor_view/DashboardLayout/DashboardLayout";
import EditProfiledisplay from "./components/EditProfiledisplay/EditProfiledisplay";
import AuthContext from "../../components/LoginPage/AuthProvider/AuthProvider";

const EditProfile = () => {
  const currentUser = useContext(AuthContext);
  return (
    <DashboardLayout title="Edit Profile" user={currentUser.user}>
      <EditProfiledisplay />
    </DashboardLayout>
  );
};

export default EditProfile;

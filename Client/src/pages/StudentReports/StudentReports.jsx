import StdDashboardLayout from "../../components/Student_view/StdDashboardLayout/StdDashboardLayout";
import styles from "./StudentReports.module.css";
import AuthContext from "../../components/LoginPage/AuthProvider/AuthProvider";
import { useContext } from "react";

const StudentReports = () => {
  const currentUser = useContext(AuthContext);
  return (
    <StdDashboardLayout
      title="Project Report"
      className={styles.reports}
      user={currentUser.user}
    ></StdDashboardLayout>
  );
};

export default StudentReports;

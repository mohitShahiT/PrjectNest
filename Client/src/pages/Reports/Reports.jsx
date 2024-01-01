import DashboardLayout from "../../components/Supervisor_view/DashboardLayout/DashboardLayout";
import styles from "./Reports.module.css";
import AuthContext from "../../components/LoginPage/AuthProvider/AuthProvider";
import { useContext } from "react";
import ReportDisply from "./components/Reportsdisplay/Reportsdisplay"

const Reports = () => {
  const currentUser = useContext(AuthContext);
  return (
    <DashboardLayout
      title="Project Report"
      className={styles.reports}
      user={currentUser.user}
    ><ReportDisply/></DashboardLayout>
  );
};

export default Reports;

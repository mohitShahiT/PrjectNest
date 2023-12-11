import { useContext, useEffect } from "react";
import Dashmain from "../../components/Supervisor_view/Dashmain/Dashmain";
import NavigationBar from "../../components/Supervisor_view/NavigationBar/NavigationBar";
import styles from "./Dashboard.module.css";
import AuthContext from "../../components/LoginPage/AuthProvider/AuthProvider";

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  useEffect(() => {
    currentUser.getUser();
  }, []);
  return (
    <div className={styles.dashboard}>
      <NavigationBar user={currentUser.user} />
      <Dashmain user={currentUser.user} />
    </div>
  );
};

export default Dashboard;

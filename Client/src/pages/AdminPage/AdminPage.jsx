import Navbar from "../../components/Admin_view/Navbar";
import Sidebar from "../../components/Admin_view/Sidebar";
import styles from "./AdminPage.module.css";
import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <Navbar />
      <div className={styles.pagesplit}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
export default AdminPage;

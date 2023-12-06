import axios from "axios";
import styles from "./Admin_editproject.module.css";
import Cookies from "js-cookie";
import { useEffect } from "react";

function EditProject() {
  useEffect(() => {
    ProjectList();
  }, []);

  return (
    <div className={styles.adminprojectcontainer}>
      <div className={styles.edit_project}>
        <div className={styles.project_list}></div>
      </div>
    </div>
  );
}

async function ProjectList() {
  console.log(localStorage.getItem("jwtToken"));
  Cookies.set("jwt", localStorage.getItem("jwtToken"));
  // axios.defaults.withCredentials = true;
  axios
    .get("http://localhost:8000/api/v1/project", { withCredentials: true })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default EditProject;

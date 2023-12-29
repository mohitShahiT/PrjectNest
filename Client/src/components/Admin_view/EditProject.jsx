/* eslint-disable react/jsx-key */
import axios from "axios";
import styles from "./Admin_editproject.module.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import AuthContext from "../LoginPage/AuthProvider/AuthProvider";

function EditProject() {
  const [projects, setProjects] = useState([]);
  const currentUser = useContext(AuthContext);
  useEffect(() => {
    ProjectList(setProjects);
  }, []);
  return (
    <div className={styles.adminprojectcontainer}>
      <div className={styles.edit_project}>
        {projects.map((project) => (
          <div className={styles.project_card}>
            <div className={styles.projectCardHeader}>
              <h3 className={styles.project_title}>{project.name}</h3>
              <Link to={`/admin/editproject/${project._id}`}>
              <MdEditDocument />
              </Link>
            </div>
              
              <div className={styles.projectsemester}>
                <p className={styles.prow}>
                  <span className={styles.labels}>Project Members:</span>
                  {project.members.map((member, i, arr) => i+1===arr.length?`${member.firstName}`:`${member.firstName}, `)}
                </p>
                <p className={styles.prow}>
                  {" "}
                  <span className={styles.labels}>Semester:</span>
                  {project.semester}
                </p>
                <p className={styles.prow}>
                  <span className={styles.labels}>Project Supervisor:</span>
                  {project.supervisor.firstName}
                </p>
                <p className={styles.prow}>
                  <span className={styles.labels}>Submission Date:</span>
                  {`${new Date(project.submissionDate).getDay()}-${new Date(
                    project.submissionDate
                  ).getMonth()}-${new Date(
                    project.submissionDate
                  ).getFullYear()}`}
                </p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

async function ProjectList(setProjects) {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/project", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    });
    console.log(response);
    setProjects(response.data.data.projects);
  } catch (err) {
    console.log(err);
  }
}

export default EditProject;

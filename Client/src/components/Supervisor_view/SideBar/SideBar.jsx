import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuGanttChart } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import { GrDocumentPerformance } from "react-icons/gr";
import { Link } from "react-router-dom";

import DropDown from "../DropDown/DropDown";
import styles from "./SideBar.module.css";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../LoginPage/AuthProvider/AuthProvider";
import axios from "axios";
const SideBar = ({ user }) => {
  const [activeProject, setActiveProject] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/user/projects`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          }
        );
        if (response.data.status === "success") {
          setActiveProject(response.data.projects[0]);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, []);

  return (
    <div className={styles.sideBar}>
      <div className={styles.project_details}>
        <div className={styles.project_about}>
          <p className={styles.project_name}>{activeProject.name}</p>
          <p className={styles.project_qote}>book renting software</p>
        </div>
        <div className={styles.dropIcon}>
          <DropDown />
        </div>
      </div>
      <div className={styles.separation_one}></div>
      <div className={styles.section_one}>
        <div className={styles.plan}>
          <p>
            <hr />
            Project Insights
            <hr />
          </p>
        </div>
        <ul className={styles.planlist}>
          <Link className={styles.listitems} to="/logsheet">
            <BsFileEarmarkSpreadsheet fontSize={"22px"} />
            Logsheet
          </Link>
          <Link className={styles.listitems} to="/reports">
            <TbReportAnalytics fontSize={"22px"} />
            Reports
          </Link>
          <Link className={styles.listitems} to="/chat">
            <HiOutlineUserGroup fontSize={"22px"} />
            Discuss
          </Link>
          <Link className={styles.listitems} to="/gantt">
            <LuGanttChart fontSize={"22px"} />
            Gantt
          </Link>
        </ul>
      </div>
      <div className={styles.separation_two}></div>
      <div className={styles.section_two}>
        <div className={styles.doingstxt}>
          <p>
            <hr />
            Project workspace
            <hr />
          </p>
        </div>
        <ul className={styles.doings}>
          <Link className={styles.listitems} to="/task">
            <BiTask fontSize={"22px"} />
            Tasks
          </Link>
          <Link className={styles.listitems} to="/members">
            <FaUserGroup fontSize={"22px"} />
            Members
          </Link>
          <Link className={styles.listitems} to="/grades">
            <GrDocumentPerformance fontSize={"22px"} />
            Grades
          </Link>
        </ul>
      </div>

      {/* <div className={styles.separation_three}>

      </div> */}
      {/* <div className={styles.section_three}>
        <div className={styles.firm}>
          <p>you're in a project managing firm</p>
        </div>
        <div className={styles.learnmore}>
          <p>learn more</p>
        </div>
      </div> */}
    </div>
  );
};

export default SideBar;

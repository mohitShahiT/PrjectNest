import styles from "./Sidebar.module.css";
import { MdOutlineAssignment } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Sidebar() {
  const [hide, setHide] = useState(false);
  function handlehide() {
    setHide(!hide);
  }

  return (
    <div className={!hide ? `${styles.sidebar}` : `${styles.hidesidebar}`}>
      <div
        className={
          !hide ? `${styles.sidebaritem}` : `${styles.hidesidebaritems}`
        }
      >
        <span className={styles.icons}>
          <MdOutlineAssignment />
        </span>
        <Link to="addproject">
          <span className={styles.sidebarOption}>Add Project</span>
        </Link>
      </div>
      <div
        className={
          !hide ? `${styles.sidebaritem}` : `${styles.hidesidebaritems}`
        }
      >
        <span className={styles.icons}>
          <FiEdit />
        </span>

        <Link to="editproject">
          <span className={styles.sidebarOption}>Edit Project</span>
        </Link>
      </div>

      <div
        className={
          !hide ? `${styles.sidebaritem}` : `${styles.hidesidebaritems}`
        }
      >
        <span className={styles.icons}>
          <TbListDetails />
        </span>
        <span className={styles.sidebarOption}>Project Details</span>
      </div>
      <div
        className={
          !hide ? `${styles.sidebaritem}` : `${styles.hidesidebaritems}`
        }
      >
        <span className={styles.icons}>
          <FiSettings />
        </span>
        <span className={styles.sidebarOption}>Settings</span>
      </div>
      <div
        className={styles.sidebaritem}
        id={styles["sidebar_toggler"]}
        onClick={handlehide}
      >
        {!hide ? (
          <>
            <span className={styles.icons}>
              {" "}
              <BiArrowBack />{" "}
            </span>
            <span>Hide</span>
          </>
        ) : (
          <>
            <span className={styles.icons}>
              <IoMdArrowForward />
            </span>
            <span>Show</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

import styles from "./NavigationBar.module.css";

import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import Profiledropdown from "../Profiledropdown/Profiledropdown";
import Notifications from "../Notifications/Notifications";
import Recent from "../Recent/Recent";
import Starred from "../Starred/Starred";
import { Link } from "react-router-dom";
import Searchbar from "../../Admin_view/Searchbar";

const NavigationBar = ({ user }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.imglogo}>
        <a href="#logo">
          <img src="/image/applogo.png" alt="app-logo" />
        </a>
      </div>
      <div className={styles.rightsec}>
        <ul className={styles.implist}>
          <Link to="/dashboard">
            <a href="#dashboard">Dashboard</a>
          </Link>
          <li>
            <a href="#recent">
              <Recent />
            </a>
          </li>
        </ul>
        <div className={styles.searchnavbar}>
          <Searchbar />
        </div>
        <ul className={styles.profilesec}>
          <li>
            <a href="#notification">
              <Notifications />
            </a>
          </li>
          <li>
            <a href="#settings">
              <IoSettingsOutline />
            </a>
          </li>
          <li>
            <a href="#help">
              <FiHelpCircle />
            </a>
          </li>
          <li>
            <a href="#profile">
              <Profiledropdown
                userDetails={{
                  name: `${user?.firstName}`,
                  email: `${user?.email}`,
                }}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;

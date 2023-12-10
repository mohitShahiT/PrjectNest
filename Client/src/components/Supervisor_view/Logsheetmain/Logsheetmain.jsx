import Logsheetdisplay from "../Logsheetdisplay/Logsheetdisplay";
import SideBar from "../SideBar/SideBar";
import styles from "./Logsheetmain.module.css";

const Logsheetmain = () => {
  return (
    <div className={styles.logsheetmain}>
      <SideBar />
      <Logsheetdisplay />
    </div>
  );
};

export default Logsheetmain;

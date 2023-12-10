import Reportsdisplay from "../Reportsdisplay/Reportsdisplay";
import SideBar from "../SideBar/SideBar";
import styles from "./Reportsmain.module.css";

const Reportsmain = () => {
  return (
    <div className={styles.reportsmain}>
      <SideBar />
      <Reportsdisplay />
    </div>
  );
};

export default Reportsmain;

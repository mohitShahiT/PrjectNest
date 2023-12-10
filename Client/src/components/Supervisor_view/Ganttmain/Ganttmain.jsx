import Ganttdisplay from "../Ganttdisplay/Ganttdisplay";
import SideBar from "../SideBar/SideBar";
import styles from "./Ganttmain.module.css";

const Ganttmain = () => {
  return (
    <div className={styles.ganttmain}>
      <SideBar />
      <Ganttdisplay />
    </div>
  );
};

export default Ganttmain;

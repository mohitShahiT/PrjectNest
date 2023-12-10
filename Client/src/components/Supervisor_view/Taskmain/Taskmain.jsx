import Taskdisplay from "../Taskdisplay/Taskdisplay";
import SideBar from "../SideBar/SideBar";
import styles from "./Taskmain.module.css";

const Taskmain = () => {
  return (
    <div className={styles.taskmain}>
      <SideBar />
      <Taskdisplay />
    </div>
  );
};

export default Taskmain;
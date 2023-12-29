import Membersdisplay from "../Membersdisplay/Membersdisplay";
import SideBar from "../SideBar/SideBar";
import styles from "./Membersmain.module.css";

const Membersmain = () => {
  return (
    <div className={styles.membersmain}>
      <SideBar />
      <Membersdisplay />
    </div>
  );
};

export default Membersmain;

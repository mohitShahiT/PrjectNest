import Gradesdisplay from "../Gradesdisplay/Gradesdisplay";
import SideBar from "../SideBar/SideBar";
import styles from "./Gradesmain.module.css";

const Gradesmain = () => {
  return (
    <div className={styles.gradesmain}>
      <SideBar />
      <Gradesdisplay />
    </div>
  );
};

export default Gradesmain;

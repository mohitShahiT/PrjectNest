import styles from "./Recent.module.css";
import React, { useState } from "react";

const Recent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRecent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.dropdown_contrecent}>
      <div className={styles.toggle} onClick={toggleRecent}>
        <span>Recent</span>
      </div>
      {isOpen && (
        <div className={styles.dropdown_contentrecent}>
          <ul className={styles.projectlist2}>
            <li>Agniparikshya</li>
            <li>Aviyanta 2.0</li>
            <li>Deep learning</li>
            <li>Project-4</li>
            <li>Project-5</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Recent;

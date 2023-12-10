import styles from '../DropDown/DropDown.module.css'
import React, { useState } from 'react';


const Starred = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleStarred = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.dropdown_container}>
    <div className={styles.toggle} onClick={toggleStarred}>
      <span>Starred</span>
    </div>
    {isOpen && (
      <div className={styles.dropdown_content}>
        <ul className={styles.projectlist}>
          <li>Agniparikshya</li>
          <li>Aviyanta 2.0</li>
          <li>Deep learning</li>
          <li>Project-4</li>
          <li>Project-5</li>
        </ul>
      </div>
    )}
  </div>
  )
}

export default Starred
import styles from "./DropDown.module.css"
import React, { useState } from 'react';
import {MdArrowDropDown} from 'react-icons/md'

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.dropdown_container}>
    <div className={styles.toggle_button} onClick={toggleDropdown}>
      <MdArrowDropDown/>
    </div>
    {isOpen && (
      <div className={styles.dropdown_content}>
        <ul className={styles.projectlist}>
          <li>Agniparikshya</li>
          <li>Aviyanta 2.0</li>
          <li>Deep learning</li>
          <li>Project-4</li>
          <li>Project-5</li>
          <li>Project-6</li>
          <li>Project-7</li>
        </ul>
      </div>
    )}
  </div>
  )
}

export default DropDown
import styles from './Profiledropdown.module.css';
import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import { LuUserCircle } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';
import { IoMdRemoveCircle } from 'react-icons/io';
import { Link } from "react-router-dom";

const Profiledropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.profile_dropdown}>
      <div className={styles.profile_icon} onClick={toggleDropdown}>
        <RxAvatar />
        <img src="path_to_your_icon" alt="" />
      </div>
      {isOpen && (
        <div className={styles.dropdown_content}>
          <ul>
            <li className={styles.userdetails}>
              <div>
                <a href="#user">
                  <LuUserCircle />
                </a>
              </div>
              <Link className={styles.namenemail} to="/editprofile">
                <div className={styles.name}>Ravi Pajiyar</div>
                <div className={styles.email}>pajiyargravi@gmail.com</div>
              </Link>
            </li>
            <li className={styles.listacc}>
              Log Out <MdLogout fontSize={'22px'} />
            </li>
            <li className={styles.listacc}>
              Delete Account <IoMdRemoveCircle fontSize={'22px'} />
            </li>
          </ul>
        </div>
      )}
      {/* Close dropdown when clicked outside */}
      {isOpen && <div className={styles.overlay} onClick={closeDropdown} />}
    </div>
  );
};

export default Profiledropdown;

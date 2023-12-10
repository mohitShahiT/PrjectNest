import styles from './Notifications.module.css'
import React, { useState } from 'react';
import {MdNotificationsNone} from 'react-icons/md'

import{RxAvatar} from 'react-icons/rx'



const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotify = () => {
    setIsOpen(!isOpen);
  };

  const closeNotify = () => {
    setIsOpen(false);
  };
  return (

    <div className={styles.profile_dropdown} onMouseLeave={closeNotify}>
      <div className={styles.profile_icon} onMouseEnter={toggleNotify}>
        {<MdNotificationsNone/>}
        <img src="path_to_your_icon" alt="" />
      </div>
      {isOpen && (
        <div className={styles.dropdown_content}>
          <div className={styles.notifycont}>
            <h3 className="notify">Notifications</h3>
            <div className={styles.btnnshowtxt}>
              <p>Show only unread</p>
              <button></button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Notifications
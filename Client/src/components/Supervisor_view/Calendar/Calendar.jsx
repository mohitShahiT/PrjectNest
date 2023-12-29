import React, { useState } from 'react';
// import Fullcalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
import {BsCalendar2Check} from 'react-icons/bs'
import styles from './Calendar.module.css'

const Calendar=()=> {
    const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  return (
  <div className={styles.calendar_container}>
      <div className={styles.toggle_button} onClick={toggleCalendar}>
        <BsCalendar2Check/>
    </div>
    {showCalendar && (
      <div className={styles.calendar_content}>
        <ul className={styles.projectlist}>
        </ul>
      </div>
    )}
  </div>
  )
}
export default Calendar;

import styles from './Gradesdisplay.module.css'
import { GoMention } from 'react-icons/go'
import { BsCalendar2Check } from 'react-icons/bs'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gradesdisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextWeek = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 7);
    setCurrentDate(nextDate);
  };

  const prevWeek = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 7);
    setCurrentDate(prevDate);
  };

  const handleGradeChange = (memberId, grade) => {
    // Handle grade change logic
    console.log(`Member ${memberId} grade changed to ${grade}`);
  };

  // Dummy data for table
  const members = [
    { id: 1, name: 'Ravi Kumar Pajiyar', email: 'pajiyarravi@gmail.com' },
    { id: 2, name: 'Mohit Shahi', email: 'moheetshahi@gmail.com' },
    // Add more dummy data as needed
    { id: 3, name: 'Sushankhya Chapagain', email: 'susshankhya@gmail.com' },
    { id: 4, name: 'Arun Bhandari', email: 'arun753@gmail.com' },
    { id: 5, name: 'Eva Garcia', email: 'eva@example.com' },
  ];

  // Updated grades options
  const gradesOptions = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'];

  // Generate dummy table rows
  const tableRows = members.map((member) => (
    <tr key={member.id}>
      <td>{member.name}</td>
      <td>{member.email}</td>
      {gradesOptions.map((grade, index) => (
        <td key={index}>
          <label className={styles.squareRadio}>
            <input
              type="radio"
              name={`grade-${member.id}`}
              onChange={() => handleGradeChange(member.id, grade)}
            />
            {grade}
          </label>
        </td>
      ))}
    </tr>
  ));

  return (
    <div className={styles.gradesdisplay}>
      <div className={styles.headersection5}>
        <div className={styles.gradetxtbox}>
          <h3 className={styles.dashhead5}>Weekly Grades</h3>
          <h3 className={styles.dashhead5}>Final Grades</h3>
        </div>
        <ul className={styles.subnav5}>
          <li className={styles.subnavlist5}><GoMention fontSize={"20px"} />Mentions()</li>
          <li className={styles.subnavlist5}><BsCalendar2Check fontSize={"20px"} />Calendar</li>
        </ul>
      </div>
      <div className={styles.gradedatebox}>
        <h2>Date: {currentDate.toDateString()}</h2>
      </div>
      <div className={styles.grades_container}>
        <table className={styles.gradesTable}>
          <thead>
            <tr>
              <th>Members</th>
              <th>Email</th>
              {gradesOptions.map((grade, index) => (
                <th key={index}>{grade}</th>
              ))}
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
        <div className={styles.navigationgrade}>
          <button onClick={prevWeek}>Previous Week</button>
          <button onClick={nextWeek}>Next Week</button>
        </div>
    </div>
  )
}

export default Gradesdisplay

import styles from './Logsheetdisplay.module.css';
import { GoMention } from 'react-icons/go';
import { BsCalendar2Check } from 'react-icons/bs';
import { useState } from 'react';

const Logsheetdisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tableData, setTableData] = useState([
    { member: 'Ravi Pajiyar', assignedTask: 'Task A: first task of the week', completedTask: 'frontend section completed ', remarks: 'completed on time', presence: false },
    { member: 'Sushankhya Chapagain', assignedTask: 'frontend ui add task and its authenticationn', completedTask: 'add task completed', remarks: 'completed on time', presence: true },
    { member: 'Ravi Pajiyar', assignedTask: 'Task A: first task of the week', completedTask: 'frontend section completed ', remarks: 'completed on time', presence: false },
    { member: 'Sushankhya Chapagain', assignedTask: 'frontend ui add task and its authenticationn', completedTask: 'add task completed', remarks: 'completed on time', presence: true },
  ]);

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

  const handlePresenceChange = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData[index].presence = !updatedTableData[index].presence;
    setTableData(updatedTableData);
  };

  return (
    <div className={styles.logsheetdisplay}>
      <div className={styles.headersect}>
        <h3 className={styles.dashhe}>Log Sheet </h3>
        <ul className={styles.subn}>
          <li className={styles.subnavl}>
            <GoMention fontSize={'20px'} />
            Mentions()
          </li>
          <li className={styles.subnavl}>
            <BsCalendar2Check fontSize={'20px'} />
            Calendar
          </li>
        </ul>
      </div>
        <div className={styles.logsheetdate}>
          <h2>Date: {currentDate.toDateString()}</h2>
        </div>
      <div className={styles.logsheet_container}>
        <table className={styles.logTable}>
          <thead>
            <tr>
              <th>Members</th>
              <th>Assigned Task</th>
              <th>Completed Task</th>
              <th>Remarks</th>
              <th>Presence</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.member}</td>
                <td>{data.assignedTask}</td>
                <td>{data.completedTask}</td>
                <td>{data.remarks}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={data.presence}
                    onChange={() => handlePresenceChange(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <div className={styles.navigationnew}>
          <button onClick={prevWeek}>Previous Week</button>
          <button onClick={nextWeek}>Next Week</button>
        </div>
    </div>
  );
};

export default Logsheetdisplay;

import styles from "./Logsheetdisplay.module.css";
import { useState } from "react";

const Logsheetdisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tableData, setTableData] = useState([
    {
      member: "Ravi Pajiyar",
      assignedTask: "Task A: first task of the week",
      completedTask: "frontend section completed",
      remarks: "",
      presence: false,
      grade: "",
    },
    {
      member: "Sushankhya Chapagain",
      assignedTask: "frontend ui add task and its authentication",
      completedTask: "add task completed",
      remarks: "",
      presence: true,
      grade: "",
    },
    {
      member: "Ravi Pajiyar",
      assignedTask: "Task A: first task of the week",
      completedTask: "frontend section completed",
      remarks: "",
      presence: false,
      grade: "",
    },
    {
      member: "Sushankhya Chapagain",
      assignedTask: "frontend ui add task and its authentication",
      completedTask: "add task completed",
      remarks: "",
      presence: true,
      grade: "",
    },
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

  const handleRemarksChange = (index, remarks) => {
    const updatedTableData = [...tableData];
    updatedTableData[index].remarks = remarks;
    setTableData(updatedTableData);
  };

  return (
    <div className={styles.logsheetdisplay}>
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
              <th>Grades</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.member}</td>
                <td>{data.assignedTask}</td>
                <td>{data.completedTask}</td>
                <td>
                  <input
                    type="text"
                    value={data.remarks}
                    onChange={(e) => handleRemarksChange(index, e.target.value)}
                    className={styles.remarksInput}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={data.presence}
                    onChange={() => handlePresenceChange(index)}
                  />
                </td>
                <td>
                  <select
                    value={data.grade}
                    onChange={(e) => handleGradeChange(index, e.target.value)}
                  >
                    <option value="">Choose</option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="C-">C-</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
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

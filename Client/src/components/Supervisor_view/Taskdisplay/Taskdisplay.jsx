import styles from "./Taskdisplay.module.css";
import { GoMention } from "react-icons/go";
import { BsCalendar2Check } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

const Taskdisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [taskData, setTaskData] = useState({
    assignTasks: [],
  });
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

  const members = [
    "Ravi Pajiyar",
    "Sushankhya Chapagain",
    "Mohit Shahi",
    "Arun Bhandari",
  ];

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   await axios.post(""', { tasks: taskData.assignTasks });
    //   console.log('Data sent to the backend:', taskData.assignTasks);
    // } catch (error) {
    //   console.error('Error sending data to the backend:', error);
    // }
  };
  const handleAssignTaskChange = (e, index) => {
    const updatedTasks = [...taskData.assignTasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      assignTask: e.target.value,
    };
    setTaskData({ ...taskData, assignTasks: updatedTasks });
  };

  const handleCommentsChange = (e, index) => {
    const updatedTasks = [...taskData.assignTasks];
    updatedTasks[index] = { ...updatedTasks[index], comments: e.target.value };
    setTaskData({ ...taskData, assignTasks: updatedTasks });
  };
  return (
    <div className={styles.taskdisplay}>
      <div className={styles.headersection4}>
        <h3 className={styles.dashhead4}>Tasks </h3>
        <ul className={styles.subnav4}>
          <li className={styles.subnavlist4}>
            <GoMention fontSize={"20px"} />
            Mentions()
          </li>
          <li className={styles.subnavlist4}>
            <BsCalendar2Check fontSize={"20px"} />
            Calendar
          </li>
        </ul>
      </div>
      <div className={styles.tasknewdate}>
        <h2>Date: {currentDate.toDateString()}</h2>
      </div>
      <div className={styles.task_container}>
        <form onSubmit={handleSubmit}>
          <table className={styles.taskTable}>
            <thead>
              <tr>
                <th>Members</th>
                <th>Assign Task</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>{member}</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Assign Task"
                      value={taskData.assignTasks[index]?.assignTask || ""}
                      onChange={(e) => handleAssignTaskChange(e, index)}
                    />
                  </td>
                  <td>
                    <textarea
                      placeholder="Comments"
                      value={taskData.assignTasks[index]?.comments || ""}
                      onChange={(e) => handleCommentsChange(e, index)}
                    ></textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.navigation_task}>
        <button onClick={prevWeek}>Previous Week</button>
        <button onClick={nextWeek}>Next Week</button>
      </div>
    </div>
  );
};

export default Taskdisplay;

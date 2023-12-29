import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Taskdisplay.module.css";

const Taskdisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [taskData, setTaskData] = useState({
    assignTasks: [],
  });
  const [activeProject, setActiveProject] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/user/projects`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          }
        );
        if (response.data.status === "success") {
          await fetchCurrentProject(response.data.projects[0]._id);
        }
      } catch (e) {
        console.log(e);
      }
    };

    const fetchCurrentProject = async (id) => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/v1/project/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          }
        );
        if (response.data.status === "success") {
          setActiveProject(response.data.data.project);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, []);

  const submitTaskForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/project/${activeProject?.id}/${
          currentDate.toISOString().split("T")[0]
        }`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      );
      if (response.data.status === "success") {
        console.log(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `http://127.0.0.1:8000/api/v1/project/${activeProject?.id}/log-sheet/${
          currentDate.toISOString().split("T")[0]
        }`,
        { tasks: taskData.assignTasks },
        config
      );
      console.log("Data sent to the backend:", response.data);
    } catch (error) {
      console.error("Error sending data to the backend:", error);
    }
  };

  // const inputs = activeProject?.members.map((mem) => {
  //   return {
  //     id: mem._id,
  //     name: "Assigned Task",
  //     label: `${mem.firstName} ${mem.lastName}`,
  //     placeholder: `Task for ${mem.firstName}`,
  //     type: "textarea",
  //   };
  // });
  const inputs = activeProject?.members.map((mem) => {
    return {
      id: mem._id,
      name: "Assigned Task",
      label: `${mem.firstName} ${mem.lastName}`,
      placeholder: `Task for ${mem.firstName}`,
      type: "textarea",
    };
  });

  // const [values, setValues] = useState(
  //   activeProject?.members.map((mem) => {
  //     return {
  //       id: mem._id,
  //       task: "", // Initialize task for each member
  //     };
  //   })
  // );
  const [values, setValues] = useState(
    activeProject?.members.map((mem) => {
      return {
        id: mem._id,
        task: "", // Initialize task for each member
      };
    }) || [] // If activeProject?.members is undefined, initialize values as an empty array
  );

  const onChange = (e, memberId) => {
    const updatedValues = values.map((val) =>
      val.id === memberId ? { ...val, task: e.target.value } : val
    );
    setValues(updatedValues);
  };

  return (
    <>
      {!activeProject ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={styles.taskdisplay}>
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
                    </tr>
                  </thead>
                  <tbody>
                    {inputs?.map((member, index) => (
                      <tr key={index}>
                        <td>{member.label}</td>
                        <td>
                          <textarea
                            placeholder={member.placeholder}
                            value={values[index]?.task || ""} // Use values[index]?.task or an empty string as a fallback
                            onChange={(e) => onChange(e, member.id)}
                          ></textarea>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="submit"
                  className={styles.submitButton}
                  onClick={submitTaskForm}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className={styles.navigation_task}>
              <button onClick={prevWeek}>Previous Week</button>
              <button onClick={nextWeek}>Next Week</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Taskdisplay;

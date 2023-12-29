import AsyncSelect from "react-select/async";
import styles from "./EditSelectedProject.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { debounce } from "lodash";

let supervisorPlaceholder, teamPlaceholder;
async function Project({
  id,
  setProjectName,
  setSemester,
  setDate,
  setSupervisor,
  setMembers,
  setDefaultMembersOptions,
}) {
  try {
    const link = `http://localhost:8000/api/v1/project/${id}`;

    const response = await axios.get(link, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    });

    if (response.data.status === "success") {
      console.log(response);
      setProjectName(() => response.data.data.project.name);
      setDate(
        () =>
          new Date(response.data.data.project.submissionDate)
            .toISOString()
            .split("T")[0] //Review this
      );
      setSemester(() => response.data.data.project.semester);
      supervisorPlaceholder = response.data.data.project.supervisor.email;
      setSupervisor(() => response.data.data.project.supervisor._id);
      setMembers(() => response.data.data.project.members);
      const d = response.data.data.project.members.map((mem) => {
        console.log({ label: mem.email, value: mem._id });
        return { label: mem.email, value: mem._id };
      });

      setDefaultMembersOptions(d);
    }
  } catch (err) {
    console.log(err);
  }
}

function EditSelectedProject() {
  const [projectName, setProjectName] = useState("");
  const [semester, setSemester] = useState("");
  const [Date, setDate] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [members, setMembers] = useState([]);
  const { id } = useParams();
  const [options, setOptions] = useState([]);
  const [defaultMembersOptions, setDefaultMembersOptions] = useState([]);

  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
    setMembers(selectedOption);
  };
  const handleChangeSelect = (e) => {
    setSupervisor(e.value);
    console.log(supervisor);
  };
  const handleChangeMultiSelect = (e) => {
    console.log(e);
    setMembers(e.map((obj) => obj.value));
    console.log(members);
  };

  function submitSupervisor(e) {
    e.preventDefault();
    console.log(supervisor);
  }
  const submitTeam = (e) => {
    e.preventDefault();
    console.log(members);
  };
  const debouncedLoadOptions1 = debounce(async (searchValue, callback) => {
    try {
      const link = `http://localhost:8000/api/v1/user/?email=${searchValue}&role=student`;

      const response = await axios.get(link, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      });

      if (response.data.status === "success") {
        const newOptions = response.data.data.users.map((user) => {
          return {
            label: user.email,
            value: user._id,
          };
        });
        console.log(searchValue, newOptions);
        callback(newOptions);
        setOptions(newOptions);
        console.log(options);
      } else {
        console.log("No search found");
      }
    } catch (error) {
      alert(error);
    }

    console.log("loadOptions", searchValue, options);
  }, 1000);
  const debouncedLoadOptions2 = debounce(async (searchValue, callback) => {
    try {
      const link = `http://localhost:8000/api/v1/user/?email=${searchValue}&role=supervisor`;

      const response = await axios.get(link, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      });

      console.log(response);

      if (response.data.status === "success") {
        const newOptions = response.data.data.users.map((user) => {
          return {
            label: user.email,
            value: user._id,
          };
        });
        console.log(searchValue, newOptions);
        callback(newOptions);
        setOptions(newOptions);
        console.log(options);
      } else {
        console.log("No search found");
      }
    } catch (error) {
      alert(error);
    }

    console.log("loadOptions", searchValue, options);
  }, 1000);

  const loadOptions1 = (searchValue, callback) => {
    debouncedLoadOptions1(searchValue, callback);
  };
  const loadOptions2 = (searchValue, callback) => {
    debouncedLoadOptions2(searchValue, callback);
  };

  useEffect(() => {
    Project({
      id,
      setProjectName,
      setSemester,
      setDate,
      setSupervisor,
      setMembers,
      setDefaultMembersOptions,
    });
  }, []);
  console.log(supervisor);
  let d = defaultMembersOptions;
  console.log(d);
  return (
    <div className={styles.edit_profile_form_container}>
      <h1 className={styles.heading}>Edit Profile</h1>
      <h2 className={styles.subheading}>Basic Information</h2>
      <div className={styles.form_section}>
        <form className={styles.form}>
          <label className={styles.label}>Project Title</label>
          <input
            type="text"
            className={styles.input}
            value={projectName}
          ></input>
          <label className={styles.label}>Semester</label>
          <select className={styles.input} value={semester}>
            {/* <option>1st Semester</option>
            <option>2nd Semester</option>
            <option>3rd Semester</option>
            <option>4th Semester</option>
            <option>5th Semester</option>
            <option>6th Semester</option>
            <option>7th Semester</option>
            <option>8th Semester</option> */}
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>

          <label className={styles.label}>Date</label>
          <input type="date" className={styles.input} value={Date}></input>
          <div className={styles.submit}>
            <input
              type="submit"
              className={styles.submitbtn}
              value="Change"
            ></input>
          </div>
        </form>
        <hr />

        <h1 className={styles.heading}>Critical Section</h1>
        <h2 className={styles.subheading}>Change Supervisor</h2>
        <div className={styles.form_section}>
          <form className={styles.form} onSubmit={submitSupervisor}>
            <AsyncSelect
              loadOptions={loadOptions2}
              onChange={handleChangeSelect}
              placeholder={supervisorPlaceholder}
            />
            <div className={styles.submit}>
              <input
                type="submit"
                value="Change Supervisor"
                className={styles.submitbtn}
              ></input>
            </div>
          </form>
          <h2 className={styles.subheading}>Add New Team Members</h2>
          <form className={styles.form} onSubmit={submitTeam}>
            {console.log(d)}
            <AsyncSelect
              isMulti
              loadOptions={loadOptions1}
              onChange={handleChangeMultiSelect}
            />
            <div className={styles.submit}>
              <input
                type="submit"
                className={styles.submitbtn}
                value="Change Team Members"
              ></input>
            </div>
          </form>
          <form className={styles.removeTeamMembers}>
            <h2>Remove Team Members</h2>
            {console.log(defaultMembersOptions.map((mem) => mem.label))}
            <ul className={styles.addedmembers}>
              {defaultMembersOptions.map((mem) => (
                <li key={mem.value}>{mem.label}
                <span className={styles.removebtn}></span></li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditSelectedProject;

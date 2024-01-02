import React from "react";
import { useState, useEffect } from "react";
import styles from "./EditProfiledisplay.module.css";
import axios from "axios";

const EditProfiledisplay = ({ currentUser }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "", // Email is non-editable
  });
  useEffect(() => {
    // Fetch user data from the backend and populate the fields
    // Assume an endpoint '/api/user' retrieves user data
    // fetch("/api/user") // Adjust the endpoint accordingly
    //   .then((res) => res.json())
    //   .then((data) => {
    setUserData({
      ...userData,
      firstName: currentUser.user.firstName,
      lastName: currentUser.user.lastName,
      email: currentUser.user.email,
    });
    //   })
    //   .catch((error) => console.log("Error:", error));
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  async function handleFormSubmit(event) {
    event.preventDefault();
    const link = `http://127.0.0.1:8000/api/v1/user/update-my-info`;
    console.log({
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
    const response = await axios.patch(
      link,
      {
        firstName: userData.firstName,
        lastName: userData.lastName,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      }
    );
    console.log(response);
    window.location.reload();
  }

  return (
    <div className={styles.edit_profile_container}>
      <div className={styles.left_section}>
        <h2>Image Upload</h2>
        <input type="file" onChange={handleImageUpload} accept="image/*" />
        <h3>Ravi Pajiyar</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos id,
          unde delectus amet eius nostrum rerum fugiat quaerat reiciendis at
          harum explicabo distinctio expedit
        </p>
      </div>
      <div className={styles.right_section}>
        <h2>User Details</h2>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <label className={styles.labels}>
            First Name:
            <input
              className={styles.inputFields}
              type="text"
              defaultValue={userData.firstName}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />
          </label>
          <label className={styles.labels}>
            Last Name:
            <input
              className={styles.inputFields}
              type="text"
              defaultValue={userData.lastName}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
          </label>
          {/* Password input is omitted here for security reasons */}
          <h2>Contact Section</h2>
          <label className={styles.labels}>
            Email:
            <input
              className={styles.emailInputField}
              type="email"
              value={userData.email}
              readOnly
              disabled
            />
          </label>
          <button type="submit" className={styles.saveChange}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfiledisplay;

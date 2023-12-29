import React from "react";
import { useState, useEffect } from "react";
import styles from "./EditProfiledisplay.module.css";
const EditProfiledisplay = () => {
  const [userData, setUserData] = useState({
    username: "",
    fullName: "",
    about: "",
    email: "", // Email is non-editable
    image: null,
  });
  useEffect(() => {
    // Fetch user data from the backend and populate the fields
    // Assume an endpoint '/api/user' retrieves user data
    fetch("/api/user") // Adjust the endpoint accordingly
      .then((res) => res.json())
      .then((data) => {
        setUserData({
          ...userData,
          username: data.username,
          fullName: data.fullName,
          about: data.about,
          email: data.email,
          image: data.image,
        });
      })
      .catch((error) => console.log("Error:", error));
  }, []);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Send updated user data to the backend
    fetch("/api/updateUser", {
      method: "PUT", // Adjust the method as per your backend API
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated user data:", data);
        // Handle success or any other actions after successful update
      })
      .catch((error) => console.log("Error:", error));
  };

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

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
        <form onSubmit={handleFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </label>
          <label>
            Full Name:
            <input
              type="text"
              value={userData.fullName}
              onChange={(e) =>
                setUserData({ ...userData, fullName: e.target.value })
              }
            />
          </label>
          {/* Password input is omitted here for security reasons */}
          <h2>Contact Section</h2>
          <label>
            Email:
            <input type="email" value={userData.email} readOnly />
          </label>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfiledisplay;

import styles from "./EditSelectedProject.module.css";
function EditSelectedProject() {
  return (
    <div className={styles.edit_profile_form_container}>
      <h1 className={styles.heading}>Edit Profile</h1>
      <h2 className={styles.subheading}>Basic Information</h2>
      <div className={styles.form_section}>
        <form className={styles.form}>
          <label className={styles.label}>Project Title</label>
          <input type="text" className={styles.input}></input>
          <label className={styles.label}>Semester</label>
          <select className={styles.input}>
            <option>1st Semester</option>
            <option>2nd Semester</option>
            <option>3rd Semester</option>
            <option>4th Semester</option>
            <option>5th Semester</option>
            <option>6th Semester</option>
            <option>7th Semester</option>
            <option>8th Semester</option>
          </select>
          {/* <label className={styles.label}>Team Member</label> */}
          {/* <select>
            <option>Sushankhya</option>
            <option>Mohit</option>
          </select>
          <label className={styles.label}>Supervisor</label>
          <option>Ravi</option>
          <label className={styles.label}>Date:</label> */}
          <label className={styles.label}>Date</label>
          <input type="date" className={styles.input}></input>
          <input type="submit" className={styles.submit}></input>
        </form>
      </div>
    </div>
  );
}
export default EditSelectedProject;

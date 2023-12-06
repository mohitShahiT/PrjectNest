import styles from "./AccountSection.module.css";
function AccountSection() {
  return (
    <div className={styles.accountsection}>
      <div>Name</div>
      <img
        alt="photo"
        className="profilephoto"
        src="https://picsum.photos/200"
      ></img>
    </div>
  );
}

export default AccountSection;

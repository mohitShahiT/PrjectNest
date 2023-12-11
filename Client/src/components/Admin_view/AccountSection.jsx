import { useContext } from "react";
import styles from "./AccountSection.module.css";
import AuthContext from "../LoginPage/AuthProvider/AuthProvider";

function AccountSection() {
  const currentUser = useContext(AuthContext);

  return (
    <div className={styles.accountsection}>
      <div>Hello, {currentUser.user?.firstName}</div>
      <img
        alt="photo"
        className="profilephoto"
        src="https://picsum.photos/200"
      ></img>
    </div>
  );
}

export default AccountSection;

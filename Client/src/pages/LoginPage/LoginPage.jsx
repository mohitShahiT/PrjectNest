import { useState } from "react";

// import LoginAndSignup from "../../components/LoginPage/LoginAndSignup";
import styles from "./LoginPage.module.css";
import HomeLogo from "../../components/LoginPage/HomeLogo/HomeLogo";
import LoginAndSignup from "../../components/LoginPage/LoginAndSignup/LoginAndSignup";

const LoginPage = () => {
  const [clicked, setClicked] = useState(false);
  const [signin, setSignin] = useState(false);

  return (
    <div className={`${styles.loginpage} `}>
      {clicked || signin ? <div className={styles.blur}></div> : ""}
      <HomeLogo />
      <LoginAndSignup
        clicked={clicked}
        setClicked={setClicked}
        signin={signin}
        setSignin={setSignin}
      />
    </div>
  );
};

export default LoginPage;

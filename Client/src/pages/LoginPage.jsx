import HomeLogo from "../components/LoginPage/HomeLogo";
import LoginAndSignup from "../components/LoginPage/LoginAndSignup";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={`${styles.loginpage} `}>
      <HomeLogo />
      <LoginAndSignup />
    </div>
  );
};

export default LoginPage;

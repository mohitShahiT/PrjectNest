import styles from "./LoginAndSignup.module.css";
import { FcGoogle } from "react-icons/fc";
import Or from "./Or";
import Button from "./Button";
import CatchPhrase from "./CatchPhrase";
import TermsAndConditions from "./Termsandc";

const LoginAndSignup = () => {
  return (
    <div className={styles.loginsection}>
      <CatchPhrase />
      <div className={styles.signupbuttons}>
        <Button className={`${styles.googlesignup} ${styles.createaccount}`}>
          <FcGoogle /> Signup with Google
        </Button>
        <Or />
        <Button className={`${styles.createaccount}`}>Create Account</Button>
      </div>
      <TermsAndConditions />
      <div className={`${styles.login}`}>
        <h4>Already have an account?</h4>
        <Button className={`${styles.loginbtn}`}>Sign in</Button>
      </div>
    </div>
  );
};

export default LoginAndSignup;

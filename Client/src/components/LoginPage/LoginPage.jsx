import { FcGoogle } from "react-icons/fc";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={`${styles.loginpage} `}>
      {/* <div className={`${styles.pointer}`}></div> */}

      <div className={styles.logo}>
        <img src="/image/Project.png" alt="projectnest" />
      </div>
      <div className={styles.loginsection}>
        <span className={`${styles.text}${styles.subheading}`}>
          Manage Your Project Conveniently like never before
        </span>
        <div className={styles.join_message}>
          <h2 className={styles.text} style={{ width: "100%" }}>
            Join Today.
          </h2>
        </div>
        <div className={styles.signupbuttons}>
          <button className={`${styles.googlesignup} ${styles.createaccount}`}>
            <FcGoogle /> Signup with Google
          </button>

          <div className={styles.optiontext}>
            <div className={styles.underline}></div>
            <div className={`${styles.or}`}> OR</div>
            <div className={styles.underline}></div>
          </div>

          <button className={`${styles.createaccount}`}>Create Account</button>
        </div>
        <p className={`${styles.terms} ${styles.text}`}>
          By signing up, you agree to the{" "}
          <strong>Terms of Service and Privacy Policy</strong>, including Cookie
          Use.
        </p>
        <div className={`${styles.login}`}>
          <h4>Already have an account?</h4>
          <button className={`${styles.loginbtn}`}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

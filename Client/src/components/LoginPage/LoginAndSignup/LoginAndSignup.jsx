import styles from "./LoginAndSignup.module.css";
import { FcGoogle } from "react-icons/fc";
import Or from "../Or/Or";
import Button from "../Button/Button";
import TermsAndConditions from "../Termsandc/Termsandc";
import { Link } from "react-router-dom";
import Signupform from "../Signupform/Signupform";
import SignInform from "../SignInform/SignInform";
import CatchPhrase from "../CatchPharse/CatchPhrase";

const LoginAndSignup = ({ clicked, setClicked, signin, setSignin }) => {
  function handleClick() {
    setClicked(!clicked);
  }
  function handleclickSignin() {
    setSignin(!signin);
  }
  return (
    <div className={styles.loginsection}>
      <div className={`${styles.loginpage} `}></div>

      <CatchPhrase />
      <div className={styles.signupbuttons}>
        <Button className={`${styles.googlesignup} ${styles.createaccount}`}>
          <FcGoogle /> Signup with Google
        </Button>
        <Or />
        <Link to={"/signup"}>
          <Button
            className={`${styles.createaccount}`}
            handleClick={handleClick}
          >
            Create Account
          </Button>
        </Link>
      </div>
      <TermsAndConditions />
      <div className={`${styles.login}`}>
        <h4>Already have an account?</h4>
        <Link to={"/login"}>
          <Button
            className={`${styles.loginbtn}`}
            handleClick={handleclickSignin}
          >
            Sign in
          </Button>
        </Link>
      </div>
      <Signupform clicked={clicked} handleClick={handleClick} />
      <SignInform clicked={signin} handleClick={handleclickSignin} />
    </div>
  );
};

export default LoginAndSignup;

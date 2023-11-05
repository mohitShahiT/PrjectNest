import { useState } from "react";
import styles from "./SignInform.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoggedIn from "../../pages/LoggedIn";

const SignInform = ({ clicked, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        navigate("/home");
      } else {
        navigate("/");
        alert("Invalid Email or Password");
        handleClick(!clicked);
      }
    } catch (error) {
      alert(error);
    }

    // handleClick(!clicked);
  }

  function handlecross() {
    setEmail("");
    setPassword("");
    handleClick();
  }

  return (
    <div className={clicked ? `${styles.SignInform}` : `${styles.hidden}`}>
      <div className={styles.SignInform_quit}>
        <button className={styles.cross} onClick={handlecross}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            {" "}
            &#10006;
          </Link>
        </button>
      </div>
      <h1 style={{ textAlign: "center", color: "azure" }}> SignIn</h1>
      <form onSubmit={handleSubmit}>
        <InputItem
          value={email}
          type="email"
          placeholder={"Enter your email"}
          onChange={setEmail}
        />
        <InputItem
          value={password}
          type="password"
          placeholder={"Enter your password"}
          onChange={setPassword}
        />

        <div className={styles.submit}>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};

function InputItem(props) {
  return (
    <div className={styles.inputbox}>
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
export default SignInform;

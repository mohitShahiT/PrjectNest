import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ className, handleClick, children }) => {
  return (
    <>
      <button className={className} onClick={handleClick}>
        {children}{" "}
      </button>
    </>
  );
};

export default Button;

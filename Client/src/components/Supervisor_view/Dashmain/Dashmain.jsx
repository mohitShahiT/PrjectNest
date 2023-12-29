import Rightdisplay from "../Rightdisplay/Rightdisplay";
import SideBar from "../SideBar/SideBar";
import styles from "./Dashmain.module.css";
import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../LoginPage/AuthProvider/AuthProvider";

const Dashmain = ({ user }) => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios("http://127.0.0.1:8000", {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  //         },
  //       });
  //       console.log(response);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className={styles.dashmain}>
      <SideBar user={user} />
      <Rightdisplay user={user} />
    </div>
  );
};

export default Dashmain;

import React, { useState } from 'react'
import styles from './Join.module.css'
import logo from "/image/logo.png";
import { Link } from "react-router-dom";

let user;


const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}


const Join = () => {

    const [name, setname] = useState("");

    return (
        <div className={styles.JoinPage}>
            <div className={styles.JoinContainer}>
                <img src={logo} alt="logo" />
                <h1>C CHAT</h1>
                <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
                <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">  <button onClick={sendUser} className="joinbtn">Login In</button></Link>
            </div>
        </div>
    )
}

export default Join
export { user }

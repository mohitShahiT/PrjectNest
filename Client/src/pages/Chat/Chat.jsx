import Chatmain from "../../components/Supervisor_view/Chatmain/Chatmain"
import NavigationBar from "../../components/Supervisor_view/NavigationBar/NavigationBar"
import styles from './Chat.module.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Chat= () => {
  return (
    <div className={styles.chat}>
        <NavigationBar/>
        <Chatmain/>
    </div>
  )
}

export default Chat
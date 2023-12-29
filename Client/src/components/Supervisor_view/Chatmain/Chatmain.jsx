import Chatdisplay from '../Chatdisplay/Chatdisplay'
import SideBar from '../SideBar/SideBar'
import styles from './Chatmain.module.css'
const Chatmain = () => {
  return (
    <div className={styles.chatmain}>
        <SideBar/>
        <Chatdisplay/>
    </div>
  )
}

export default Chatmain
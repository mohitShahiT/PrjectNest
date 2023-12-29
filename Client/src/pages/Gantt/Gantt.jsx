import Ganttmain from "../../components/Supervisor_view/Ganttmain/Ganttmain"
import NavigationBar from "../../components/Supervisor_view/NavigationBar/NavigationBar"
import styles from './Gantt.module.css'

const Gantt = () => {
  return (
    <div className={styles.gantt}>
        <NavigationBar/>
        <Ganttmain/>
    </div>
  )
}

export default Gantt
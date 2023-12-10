import Taskmain from "../../components/Supervisor_view/Taskmain/Taskmain"
import NavigationBar from "../../components/Supervisor_view/NavigationBar/NavigationBar"
import styles from './Task.module.css'

const Task= () => {
  return (
    <div className={styles.task}>
        <NavigationBar/>
        <Taskmain/>
    </div>
  )
}

export default Task
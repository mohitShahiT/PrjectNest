import Gradesmain from "../../components/Supervisor_view/Gradesmain/Gradesmain"
import NavigationBar from "../../components/Supervisor_view/NavigationBar/NavigationBar"
import styles from './Grades.module.css'

const Grades = () => {
  return (
    <div className={styles.grades}>
        <NavigationBar/>
        <Gradesmain/>
    </div>
  )
}

export default Grades
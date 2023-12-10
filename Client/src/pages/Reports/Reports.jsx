import Reportsmain from "../../components/Supervisor_view/Reportsmain/Reportsmain"
import NavigationBar from "../../components/Supervisor_view/NavigationBar/NavigationBar"
import styles from './Reports.module.css'

const Reports = () => {
  return (
    <div className={styles.reports}>
        <NavigationBar/>
        <Reportsmain/>
    </div>
  )
}

export default Reports
import Logsheetmain from "../../components/Supervisor_view/Logsheetmain/Logsheetmain"
import NavigationBar from "../../components/Supervisor_view/NavigationBar/NavigationBar"
import styles from './Logsheet.module.css'

const Logsheet= () => {
  return (
    <div className={styles.logsheet}>
        <NavigationBar/>
        <Logsheetmain/>
    </div>
  )
}

export default Logsheet
import Membersmain from "../../components/Supervisor_view/Membersmain/Membersmain"
import NavigationBar from "../../components/Supervisor_view/NavigationBar/NavigationBar"
import styles from './Members.module.css'

const Members = () => {
  return (
    <div className={styles.members}>
        <NavigationBar/>
        <Membersmain/>
    </div>
  )
}

export default Members
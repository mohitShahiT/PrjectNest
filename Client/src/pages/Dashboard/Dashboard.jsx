import Dashmain from '../../components/Supervisor_view/Dashmain/Dashmain'
import NavigationBar from '../../components/Supervisor_view/NavigationBar/NavigationBar'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <NavigationBar/>
        <Dashmain/>
    </div>
  )
}

export default Dashboard
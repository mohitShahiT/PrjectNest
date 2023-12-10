import styles from './Ganttdisplay.module.css'
import {GoMention} from 'react-icons/go'
import {BsCalendar2Check} from 'react-icons/bs'

const Ganttdisplay = () => {
  return (
    <div className={styles.ganttdisplay}>
      <div className={styles.headersec}>
        <h3 className={styles.dashh}>Gantt Chart</h3>
        <ul className={styles.subna}>
          <li className={styles.subnavli}><GoMention fontSize={"20px"}/>Mentions()</li>
          <li className={styles.subnavli}><BsCalendar2Check fontSize={"20px"}/>Calendar</li>
        </ul>
      </div>
      <div className="gantttxt">
        <p>Gantt Chart</p>
      </div>
    </div>
  )
}

export default Ganttdisplay
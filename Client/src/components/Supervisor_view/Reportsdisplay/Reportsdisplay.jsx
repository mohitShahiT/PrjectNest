import styles from './Reportsdisplay.module.css'
import {GoMention} from 'react-icons/go'
import {BsCalendar2Check} from 'react-icons/bs'

const Reportsdisplay = () => {
  return (
    <div className={styles.reportsdisplay}>
      <div className={styles.headersection6}>
        <h3 className={styles.dashhead6}>Reports</h3>
        <ul className={styles.subnav6}>
          <li className={styles.subnavlist6}><GoMention fontSize={"20px"}/>Mentions()</li>
          <li className={styles.subnavlist6}><BsCalendar2Check fontSize={"20px"}/>Calendar</li>
        </ul>
      </div>
      <div className="gantttxt">
        <p>Reports</p>
      </div>
    </div>
  )
}

export default Reportsdisplay
import styles from './Rightdisplay.module.css'
import {GoMention} from 'react-icons/go'
import {BsCalendar2Check} from 'react-icons/bs'
// import Task from '../../pages/Task/Task'
import Calendar from '../Calendar/Calendar'

const Rightdisplay = () => {
  return (
    <div className={styles.rightdisplay}>
      <div className={styles.headersection}>
        <h3 className={styles.dashhead}>Dashboard</h3>
        <ul className={styles.subnav}>
          <li className={styles.subnavlist}><GoMention fontSize={"20px"}/>Mentions()</li>
          <li className={styles.subnavlist}><Calendar/>Calendar</li>
        </ul>
      </div>
      <div className={styles.mainsection}>
        <div className={styles.leftcard}>
            <div className={styles.cardone}>
                <p>Tasks</p>
            </div>
            <div className={styles.cardtwo}>
                <p>Grades</p>
            </div>
        </div>
        <div className={styles.rightcard}>
            <div className={styles.cardthree}>
                <p>Gantt</p>
            </div>
            <div className={styles.cardfour}>
                <p>Progressbar</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rightdisplay
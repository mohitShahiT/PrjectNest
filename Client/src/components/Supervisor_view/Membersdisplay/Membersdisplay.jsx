import styles from './Membersdisplay.module.css'
import {GoMention} from 'react-icons/go'
import {BsCalendar2Check} from 'react-icons/bs'

const Membersdisplay = () => {
    const users = [
        {
          id: 1,
          profilePic: 'https://via.placeholder.com/50',
          username: 'pankaj@123',
          fullname: 'Pankaj Raj Dawadi',
          email: 'pankaj323@gmail.com',
          roles: 'Supervisor',
        },
        {
          id: 2,
          profilePic: 'https://via.placeholder.com/50',
          username: 'ravi232',
          fullname: 'Ravi Pajiyar',
          email: 'ravi123@gmail.com',
          roles: 'Student',
        },
        {
         id: 3,
         profilePic: 'https://via.placeholder.com/50',
         username: 'user2',
         fullname: 'sushankhya chapagain',
         email: 'sushank123@gmail.com',
         roles: 'Student',
          },
          {
         id: 4,
         profilePic: 'https://via.placeholder.com/50',
         username: 'user2',
         fullname: 'sushankhya chapagain',
         email: 'sushank123@gmail.com',
         roles: 'Student',
          },
          {
            id: 5,
            profilePic: 'https://via.placeholder.com/50',
            username: 'user2',
            fullname: 'sushankhya chapagain',
            email: 'sushank123@gmail.com',
            roles: 'Student',
          },
        
        // Add more dummy data as needed
      ];
      return (
        <div className={styles.membersdisplay}>
          <div className={styles.headersection2}>
            <h3 className={styles.dashhead2}>Project Members </h3>
            <ul className={styles.subnav2}>
              <li className={styles.subnavlist2}><GoMention fontSize={"20px"}/>Mentions()</li>
              <li className={styles.subnavlist2}><BsCalendar2Check fontSize={"20px"}/>Calendar</li>
            </ul>
          </div>
          <div className={styles.table_cont}>
            <table className={styles.user_table}>
                <thead>
                <tr>
                    <th>Profile pic</th>
                    <th>Username</th>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Roles</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                    <td>
                        <img src={user.profilePic} alt="Profile" className={styles.profile_pic} />
                    </td>
                    <td>{user.username}</td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.roles}</td>
                    </tr>
                ))}
                </tbody>
            </table>
    </div>
    </div>
  )
}
export default Membersdisplay
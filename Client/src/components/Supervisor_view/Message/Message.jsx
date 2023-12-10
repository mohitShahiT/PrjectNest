import React from 'react'
import styles from './Message.module.css'


const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={`{styles.messageBox} ${classs}`}  >
                {`${user}: ${message}`}
            </div>
        )
    }
    else {


        return (
            <div className={`{styles.messageBox} ${classs}`}>
                {`You: ${message}`}
            </div>
        )
    }
}

export default Message

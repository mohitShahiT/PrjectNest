import React from "react";
import styles from "./Messages.module.css";

const Messages = ({ user, message, classs }) => {
  if (user) {
    return (
      <div className={`${styles.messageBox} ${styles[classs]}`}>
        {`${user}: ${message}`}
      </div>
    );
  } else {
    return (
      <div className={`${styles.messageBox} ${styles[classs]}`}>
        {`You: ${message}`}
      </div>
    );
  }
};

export default Messages;

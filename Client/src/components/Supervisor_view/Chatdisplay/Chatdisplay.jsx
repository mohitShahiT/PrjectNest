
import {GoMention} from 'react-icons/go'
import {BsCalendar2Check} from 'react-icons/bs'
// import React, { useEffect, useState } from 'react'
// import { user } from "../Join/Join";
// import socketIo from "socket.io-client";
import styles from './Chatdisplay.module.css';
// import sendLogo from "/Image/send.png";
// import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
// import closeIcon from "/Image/closeIcon.png";

// let socket;
// const ENDPOINT = "http://127.0.0.1:5173/";

// const Chatdisplay = () => {

//     const [id, setid] = useState("");
//     const [messages, setMessages] = useState([])

//     const send = () => {
//         const message = document.getElementById('chatInput').value;
//         socket.emit('message', { message, id });
//         document.getElementById('chatInput').value = "";
//     }

//     console.log(messages);
//     useEffect(() => {
//         socket = socketIo(ENDPOINT, { transports: ['websocket'] });

//         socket.on('connect', () => {
//             alert('Connected');
//             setid(socket.id);

//         })
//         console.log(socket);
//         socket.emit('joined', { user })

//         socket.on('welcome', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message);
//         })

//         socket.on('userJoined', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message);
//         })

//         socket.on('leave', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message)
//         })

//         return () => {
//             socket.emit('disconnec');
//             socket.off();
//         }
//     }, [])

//     useEffect(() => {
//         socket.on('sendMessage', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message, data.id);
//         })
//         return () => {
//             socket.off();
//         }
//     }, [messages])

//   return (
//     <div className={styles.chatdisplay}>
//         <div className={styles.headersection3}>
//             <h3 className={styles.dashhead3}>Realtime Chat </h3>
//             <ul className={styles.subnav3}>
//             <li className={styles.subnavlist3}><GoMention fontSize={"20px"}/>Mentions()</li>
//             <li className={styles.subnavlist3}><BsCalendar2Check fontSize={"20px"}/>Calendar</li>
//             </ul>
//         </div>
//             <div className={styles.chatContainer}>
//                 <div className={styles.header}>
//                     <h2>C CHAT</h2>
//                     <a href="/"> <img src={closeIcon} alt="Close" /></a>
//                 </div>
//                 <ReactScrollToBottom className={styles.chatBox}>
//                     {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
//                 </ReactScrollToBottom>
//                 <div className={styles.inputBox}>
//                     <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
//                     <button onClick={send} className={styles.sendBtn}><img src={sendLogo} alt="Send" /></button>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default Chatdisplay

// Frontend - ChatApp.js

// Chatdisplay.js

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Your backend URL

const Chatdisplay = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('message', (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      socket.off('message');
    };
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() !== '') {
      socket.emit('message', { text: input });
      setInput('');
    }
  };

  return (
    <div className={styles.chatdisplay}>
      <div className={styles.headersection3}>
        <h3 className={styles.dashhead3}>Realtime Chat </h3>
        <ul className={styles.subnav3}>
          <li className={styles.subnavlist3}>
            <GoMention fontSize={'20px'} />
            Mentions()
          </li>
          <li className={styles.subnavlist3}>
            <BsCalendar2Check fontSize={'20px'} />
            Calendar
          </li>
        </ul>
      </div>
      <div className={styles.chat_box}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${msg.isSent ? styles.sent : styles.received}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.input_box}>
        <input
        className={styles.chatInput}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatdisplay;


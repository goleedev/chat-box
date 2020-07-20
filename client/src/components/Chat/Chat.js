import React, { useState, useEffect } from 'react'
import io from "socket.io-client";
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import InputMsg from '../InputMsg/InputMsg';
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import './Chat.css';

let socket;

function Chat({ location }) {
    const [name, setName] = useState('go');
    const [room, setRoom] = useState('JavaScript');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://chatter-box-goleedev.herokuapp.com/';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
    
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, location.search]);
      
      useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);
    
      const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }

    return (
        <div>
            <div className="chat__container">
            <TextContainer users={users} />
                <div className="chat__inner">
                    <div className="chat__header">
                        <Link className="chat__back" to="/">
                            <span>🔙</span>
                        </Link>
                        <h2>#{room}</h2>
                    </div>
                    <Messages messages={messages} name={name} />
                    <InputMsg message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    )
}

export default Chat

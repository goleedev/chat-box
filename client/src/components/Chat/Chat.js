import React, { useState, useEffect } from 'react'
import io from "socket.io-client";
import queryString from 'query-string';

import InputMsg from '../InputMsg/InputMsg';
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import './Chat.css';

let socket;

function Chat({ location }) {
    const [userName, setUserName] = useState('');
    const [room, setRoom] = useState('JavaScript');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://project-chat-application.herokuapp.com/';

    useEffect(() => {
        const { userName, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        
        setRoom(room);
        setUserName(userName);

        socket.emit('join', { userName, room }, (error) => {
            if (error) {
                alert(error)
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message])
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users)
        });
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMesage', message, () => setMessage(''))
        }
    };

    return (
        <div>
            <TextContainer users={users} />
            <Messages messages={messages} userName={userName} />
            <InputMsg message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
    )
}

export default Chat

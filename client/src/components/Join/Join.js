import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, InputGroup, Input, FormGroup, Label } from 'reactstrap';
import Typing from 'react-typing-animation';

function Join() {
    //Use state for username & room
    const [userName, setUserName] = useState('');
    const [room, setRoom] = useState('JavaScript');

    //Key & value set for rooms
    const Rooms = [
        { key: 1, value: "JavaScript" },
        { key: 2, value: "Python" },
        { key: 3, value: "Go" },
        { key: 4, value: "Java" }
    ]
    
    //Event handlers
    const onUserName = (e) => {
        setUserName(e.target.value);
    }

    const onRoom = (e) => {
        setRoom(e.target.value);
    }

    const onJoin = (e) => {
        //Check username and room
        if (!userName || !room) {
            e.preventDefault();
            alert("Please fill out the form first :/")
        }
    }

    return (
        <div>
            {/* Join Page Title */}
            <Typing className="join__title" loop={true} speed={180}>
                <h1>Wanna Chat?</h1>
                <Typing.Backspace speed={120} delay={12} count={11} />
            </Typing>
            {/* Join Page Form */}
            <Form className="join__box">
                <Label for="userNameSelect">Username</Label>
                <InputGroup>
                    <Input onChange={onUserName} placeholder="username" />
                </InputGroup>
                
                <Label for="chatRoomSelect">Room</Label>
                <FormGroup>
                    <Input onChange={onRoom} type="select" name="select" id="chatRoomSelect">
                        {Rooms.map(room => (
                            <option key={room.key} value={room.value}>{room.value}</option>
                        ))}
                    </Input>
                </FormGroup>
                <Link to={`/chat?name=${userName}&room=${room}`}>
                    <Button onClick={onJoin}>Join</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Join

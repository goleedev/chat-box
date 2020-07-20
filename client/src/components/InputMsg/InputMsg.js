import React from 'react';
import { Form, Input, Button } from 'reactstrap';

const InputMsg = ({setMessage, sendMessage, message}) => (
    <Form className="chat__form">
        <Input
            type="text"
            name="inputmsg"
            id="chat__info"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            placeholder="Type Here..." />
        <Button className="send" onClick={e => sendMessage(e)}>Send</Button>
    </Form>
)

export default InputMsg;

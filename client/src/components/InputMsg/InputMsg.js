import React from 'react';
import { Form, Input, Button } from 'reactstrap';

function InputMsg({setMessage, sendMessage, message}) {
    const onInputChange = ({target: { value }}) => {
        return setMessage(value)
    }

    const onInputEnter = (e) => {
        return e.key === 'Enter' ? sendMessage(e) : null
    }

    const onSend = (e) => {
        return sendMessage(e)
    }

    return (
        <div>
            <Form>
                <Input
                    type="text"
                    name="inputmsg"
                    id="chat__info"
                    value={message}
                    onChange={onInputChange}
                    onKeyPress={onInputEnter}
                    placeholder="Type Here..." />
                <Button className="send" onClick={onSend}>Send</Button>
            </Form>
        </div>
    )
}

export default InputMsg;

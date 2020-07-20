import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';

function Messages({ messages, userName }) {
    return (
        <div>
            <ScrollToBottom>
                {messages.map((message, i) => 
                    <div key={i}>
                        <Message message={message} userName={userName} />
                    </div>
                )}
           </ScrollToBottom> 
        </div>
    )
}

export default Messages


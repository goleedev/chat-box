import React from 'react';
import ReactEmoji from 'react-emoji';

function Message({ message: { text, user }, name }) {
    let isSentFromCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentFromCurrentUser = true;
    }

    return (
        isSentFromCurrentUser
        ? (
            <div>
                <p>{trimmedName}</p>
                <div>
                <p>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )    
        : (
            <div>
                <div>
                <p>{ReactEmoji.emojify(text)}</p>
                </div>
                <p>{user}</p>
            </div>
        )    
    )
}

export default Message

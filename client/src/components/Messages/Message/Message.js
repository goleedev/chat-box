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
            <div className="messageContainer justifyEnd">
              <p className="sentText pr-10">{trimmedName}</p>
              <div className="messageBox backgroundYellow">
                <p className="messageText">{ReactEmoji.emojify(text)}</p>
              </div>
            </div>
            )
        : (
            <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <p className="messageText">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
            </div>
        ) 
    )
}

export default Message

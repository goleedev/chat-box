import React from 'react';

const TextContainer = ({ users }) => (
    <div>
    {
        users
          ? (
            <div>
              <div className="chat__member-container">
                <h3>Member</h3>
                <ul className="chat__member-list">
                  {users.map(({name}) => (
                    <li key={name} className="chat__member-item">
                        🙋{name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
          : null
        }
    </div>
)

export default TextContainer

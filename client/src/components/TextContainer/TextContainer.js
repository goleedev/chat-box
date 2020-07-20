import React from 'react';

const TextContainer = ({ users }) => (
    <div>
    {
        users
          ? (
            <div>
              <h1>People currently chatting:</h1>
              <div className="activeContainer">
                <ul>
                  {users.map(({name}) => (
                    <li key={name} className="activeItem">
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

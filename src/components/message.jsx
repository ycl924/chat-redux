import React from 'react';

const Message = (props) => {
  return (
    <li
      className="message"
      onClick={() => console.log(props)}
    >
      <p><span className="username">{props.message.user}</span> - <span className="time">{props.message.time}</span></p>
      <p className="message-text">{props.message.text}</p>
    </li>
  );
};

export default Message;

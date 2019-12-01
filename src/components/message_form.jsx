import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sendMessage } from '../redux/ducks';

const MessageForm = () => {
  const currentUser = useSelector(state => state.currentUser);
  const messageCount = useSelector(state => state.selectedChannel.messages.length);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const enviar = (m) => dispatch(sendMessage(m));

  const onSubmit = (event) => {
    event.preventDefault();
    if (message.trim() === '') return;
    enviar({
      id: `m${(messageCount + 1)}`,
      user: currentUser,
      time: new Date().toLocaleTimeString('en-GB'),
      text: message
    });
    setMessage('');
  };
  const onChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form className="message-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="聊呗"
        name="message"
        value={message}
        onChange={onChange}
      />
      <button type="submit">发</button>
    </form>
  );
};

export default MessageForm;

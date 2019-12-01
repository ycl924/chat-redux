import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import Message from './message';
import MessageForm from './message_form';

const MessageList = () => {
  const scrollBox = useRef(null);
  useEffect(
    () => {
      scrollBox.current.scrollTop = scrollBox.current.scrollHeight;
  });
  // componentDidUpdate() {
  //   this.list.scrollTop = this.list.scrollHeight;
  // }

  const messages = useSelector(state => state.selectedChannel.messages);
  return (
    <div className="message-list">
      <div className="chatbox" ref={scrollBox}>
        <ul>
          {messages.map(m => (
            <Message key={m.id} message={m} />
          ))}
        </ul>
      </div>
      <MessageForm />
    </div>

  );
};

export default MessageList;

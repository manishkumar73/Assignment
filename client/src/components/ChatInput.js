import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newMessage } from '../actions/chat';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(newMessage({ text: message }));
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;

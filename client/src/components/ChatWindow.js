import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats, createChat } from '../actions/chat';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(createChat(message));
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Welcome, {user?.email}</h2>
      <div className="chat-history">
        {chats.map((chat, index) => (
          <div key={index}>{chat.message}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;

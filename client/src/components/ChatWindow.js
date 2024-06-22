import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../actions/chat';
import ChatInput from './ChatInput';

const ChatWindow = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      <h1>Chat Room</h1>
      <div className="chat-history" style={{ height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg.text}</p>
        ))}
        <div ref={chatEndRef} />
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindow;

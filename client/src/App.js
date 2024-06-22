import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatWindow from './components/ChatWindow';
import UserManagement from './components/UserManagement';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      <Routes>
        <Route path="/" element={isAuthenticated ? <ChatWindow /> : <UserManagement />} />
        <Route path="/chat" element={<ChatWindow />} />
      </Routes>
    </div>
  );
}

export default App;


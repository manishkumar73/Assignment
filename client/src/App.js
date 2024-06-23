import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChatWindow from './components/ChatWindow';
import Login from './components/Login';
import Signup from './components/Signup';
import PasswordReset from './components/PasswordReset';
import Auth from './components/Auth';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={isAuthenticated ? <ChatWindow /> : <Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<PasswordReset />} />
          <Route path="/chat" element={isAuthenticated ? <ChatWindow /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


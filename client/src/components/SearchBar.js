import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const messages = useSelector((state) => state.chat.messages);

  const filteredMessages = messages.filter((msg) =>
    msg.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search messages"
      />
      <div>
        {filteredMessages.map((msg, index) => (
          <p key={index}>{msg.text}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

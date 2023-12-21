import React from 'react';

const HiWord = ({ children }) => {
  return (
    <span className="word">
      {children}
      <span className="word-highlight" /> {/* Separate element for styling */}
    </span>
  );
};

export default HiWord;
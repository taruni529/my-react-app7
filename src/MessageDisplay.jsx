import React from 'react';
function MessageDisplay({ message }) {
  return (
    <div className="message-box">
      <h2>Message from Parent</h2>
      <p>{message}</p>
    </div>
  );
}

export default MessageDisplay;

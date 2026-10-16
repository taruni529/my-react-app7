import React, { useState } from 'react';
import MessageDisplay from './MessageDisplay';
function ParentComponent() {
  const [message, setMessage] = useState(
    'Hello from the parent component!'
  );

  return (
    <div>
      <h1>React Props Example</h1>
      <MessageDisplay message={message} />
    </div>
  );
}

export default ParentComponent;

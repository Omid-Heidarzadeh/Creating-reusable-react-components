import React, { useState } from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Example of Text Input */
function ExampleTextInput() {
  const [input, setInput] = useState('');

  return (
    <TextInputBEM
      label="Name"
      htmlFor="first-name"
      placeholder="Enter your first name"
      value={input}
      onChange={(event) => setInput(event.target.value)}
      error={null}
    />
  );
}

export default ExampleTextInput;

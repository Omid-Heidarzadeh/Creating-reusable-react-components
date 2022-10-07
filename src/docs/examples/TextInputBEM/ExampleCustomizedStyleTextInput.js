import React, { useState } from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Example of customized Text Input */
function ExampleTextInput() {
  const [input, setInput] = useState('');

  return (
    <TextInputBEM
      label="Name"
      htmlFor="first-name-customized"
      placeholder="Enter your first name"
      value={input}
      onChange={(event) => setInput(event.target.value)}
    />
  );
}

export default ExampleTextInput;

import React, { useState } from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Example of required Text Input */
function ExampleTextInput() {
  const [input, setInput] = useState('');

  return (
    <TextInputBEM
      label="Name"
      htmlFor="first-name-required"
      placeholder="Enter your first name"
      value={input}
      onChange={(event) => setInput(event.target.value)}
      error={input === '' ? 'First name is required' : null}
      required
    />
  );
}

export default ExampleTextInput;

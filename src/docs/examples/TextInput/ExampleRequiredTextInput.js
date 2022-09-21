import React, { useState } from 'react';
import TextInput from 'ps-react/TextInput';

/** Example of required Text Input */
function ExampleTextInput() {
  const [input, setInput] = useState('');

  return (
    <TextInput
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

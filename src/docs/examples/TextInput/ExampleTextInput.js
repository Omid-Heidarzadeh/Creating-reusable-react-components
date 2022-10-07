import React, { useState } from 'react';
import TextInput from 'ps-react/TextInput';

/** Example of Text Input */
function ExampleTextInput() {
  const [input, setInput] = useState('');

  return (
    <TextInput
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

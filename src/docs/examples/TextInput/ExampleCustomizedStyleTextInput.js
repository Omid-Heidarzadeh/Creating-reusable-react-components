import React, { useState } from 'react';
import TextInput from 'ps-react/TextInput';

/** Example of customized Text Input */
function ExampleTextInput() {
  const [input, setInput] = useState('');

  return (
    <TextInput
      label="Name"
      htmlFor="first-name-customized"
      placeholder="Enter your first name"
      value={input}
      onChange={(event) => setInput(event.target.value)}
      style={{
        label: {
          color: 'green',
          fontFamily: 'fantasy',
          letterSpacing: '3px',
          marginLeft: '.5em',
        },
        input: {
          borderColor: 'cyan',
          borderStyle: 'solid',
          borderRadius: '50px',
          paddingLeft: '.5em',
        },
      }}
    />
  );
}

export default ExampleTextInput;

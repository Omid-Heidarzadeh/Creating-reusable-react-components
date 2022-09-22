import React, { useState } from 'react';
import PasswordInput from 'ps-react/PasswordInput';

/** Password input without visibility toggle icon */
function ExamplePasswordInput() {
  const [password, setPassword] = useState('');
  const quality = password.length > 10 ? 100 : password.length * 10;

  return (
    <PasswordInput
      value={password}
      htmlFor={'password-field-1'}
      onChange={(event) => {
        setPassword(event.target.value);
      }}
      quality={quality}
      showVisibilityToggle={false}
    />
  );
}

export default ExamplePasswordInput;

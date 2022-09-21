import React, { useState } from 'react';
import PasswordInput from 'ps-react/PasswordInput';

/** Password input with visibility toggle icon */
function ExampleWithVisibilityToggle() {
  const [password, setPassword] = useState('');
  const quality = password.length > 10 ? 100 : password.length * 10;

  return (
    <PasswordInput
      value={password}
      htmlFor={'password-field-2'}
      onChange={(event) => {
        setPassword(event.target.value);
      }}
      quality={quality}
      showVisibilityToggle={true}
    />
  );
}

export default ExampleWithVisibilityToggle;

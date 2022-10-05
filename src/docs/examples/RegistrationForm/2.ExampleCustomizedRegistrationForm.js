import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

/** 2. Customized Registration Form */
function ExampleCustomizedRegistrationForm() {
  const formStyle = { backgroundColor: '#faf3c9', borderRadius: '15px' };
  const fieldsetStyle = {
    backgroundColor: '#eee',
    borderRadius: '15px',
    textAlign: 'center',
    margin: 'auto',
  };
  const emailFieldStyle = {
    label: { color: '#666' },
    input: {
      backgroundColor: '#ddd',
      padding: '.2em .5em',
      borderRadius: '5px',
      width: '200px',
    },
    container: { marginBottom: '1.5em' },
  };
  const passwordFieldStyle = {
    label: { color: '#666' },
    input: {
      backgroundColor: '#ddd',
      padding: '.2em 2em .2em .5em',
      borderRadius: '5px',
      width: '200px',
    },
  };
  const submitButtonStyle = {
    outline: 'none',
    borderColor: 'transparent',
    padding: '.5em 2em',
    borderRadius: '50px',
    backgroundColor: '#fc3',
  };

  return (
    <RegistrationForm
      style={{
        form: formStyle,
        fieldset: fieldsetStyle,
        email: emailFieldStyle,
        password: passwordFieldStyle,
        submit: submitButtonStyle,
      }}
    />
  );
}

export default ExampleCustomizedRegistrationForm;

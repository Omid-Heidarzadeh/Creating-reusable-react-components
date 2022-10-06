import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

/** 1. Registration form */
function ExampleRegistrationForm() {
  const onSubmit = (user) => {
    console.log('Registration successful!', user);
  };

  return <RegistrationForm onSubmit={onSubmit} />;
}

export default ExampleRegistrationForm;

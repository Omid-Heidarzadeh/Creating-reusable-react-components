import React, { useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import TextInput from 'ps-react/TextInput';
import PasswordInput from 'ps-react/PasswordInput';

const patterns = {
  email: [/^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/],
  password: [/[a-z]/, /[A-Z]/, /\d/, /[!?@#$%^&*~._-]/, /.{8,30}/],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'email': {
      return { ...state, email: action.payload };
    }
    case 'password': {
      return { ...state, password: action.payload };
    }
    default: {
      throw new Error('Unknown action type: ' + JSON.stringify(action));
    }
  }
};

/** Registration form with internal validation */
function RegistrationForm({
  successMessage = 'Registration successful.',
  passMinLength = 8,
  style = {},
}) {
  const [state, dispatch] = useReducer(reducer, { email: '', password: '' });
  const errors = checkValidity(state);

  // Define default styles
  style.email = {
    input: { width: '170px', ...style.email?.input },
    ...style.email?.label,
  };
  style.password = {
    input: { width: '170px', ...style.password?.input },
    ...style.password?.label,
  };

  // Define unique ID for the form fields
  const emailID = 'email-' + Math.floor(Math.random() * 100000);
  const passwordID = 'password-' + Math.floor(Math.random() * 100000);

  const changeHandler = useCallback((event) => {
    const type = event.target.name;
    const payload = event.target.value;
    dispatch({ type, payload });
  }, []);

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      for (const key in errors) {
        if (errors[key] === true) {
          return;
        }
      }
      window.alert(successMessage);
    },
    [errors, successMessage]
  );

  function checkValidity(state) {
    const result = {};

    for (let key in state) {
      const tests = patterns[key];
      tests.forEach((test) => {
        if (!test.test(state[key])) result[key] = true;
      });
    }

    return result;
  }

  return (
    <form
      autoComplete="on"
      onSubmit={submitHandler}
      style={{ margin: 'auto', padding: '1em', ...style.form }}
    >
      <fieldset
        style={{
          maxWidth: '20em',
          marginRight: 'auto',
          padding: '2em',
          ...style.fieldset,
        }}
      >
        <TextInput
          label="Email Address:"
          name="email"
          type="email"
          htmlFor={emailID}
          value={state.email}
          onChange={changeHandler}
          error={errors.email && 'Enter a valid email address'}
          autoComplete="email"
          required
          style={{ ...style.email }}
        />
        <PasswordInput
          label="Password:"
          name="password"
          htmlFor={passwordID}
          minLength={passMinLength}
          maxLength={40}
          value={state.password}
          onChange={changeHandler}
          quality={
            !errors.password &&
            Math.min(100, (state.password.length - 8) * 10 + 50)
          }
          error={
            errors.password &&
            `Enter 8 to 30 characters of lowercase, uppercase, digits & symbols`
          }
          style={{ ...style.password }}
        />
        <input
          type="submit"
          value="Submit"
          style={{ margin: 'auto', ...style.submit }}
        />
      </fieldset>
    </form>
  );
}

RegistrationForm.propTypes = {
  /** Message to display on successful submition */
  successMessage: PropTypes.string,

  /** Minimum acceptable password length */
  passMinLength: PropTypes.number,

  /** Style object to override default form styles */
  style: PropTypes.shape({
    form: PropTypes.object,
    fieldset: PropTypes.object,
    email: PropTypes.shape({
      label: PropTypes.object,
      input: PropTypes.object,
    }),
    password: PropTypes.shape({
      label: PropTypes.object,
      input: PropTypes.object,
    }),
    submit: PropTypes.object,
  }),
};

export default RegistrationForm;

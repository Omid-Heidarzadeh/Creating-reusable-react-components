import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TextInput from 'ps-react/TextInput';
import EyeIcon from 'ps-react/EyeIcon';
import ProgressBar from 'ps-react/ProgressBar';

function PasswordInput({
  label = 'Password',
  htmlFor = 'password',
  value,
  minLength = 8,
  maxLength = 20,
  error = '',
  onChange,
  quality = 0,
  placeholder,
  showVisibilityToggle = true,
  style,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const eyeContainerRef = useRef(null);
  const inputRef = useRef(null);
  const type = showPassword ? 'text' : 'password';

  useEffect(() => {
    if (!showVisibilityToggle) return;

    const eyeIcon = eyeContainerRef.current;
    const containerRect = eyeContainerRef.current.getBoundingClientRect();
    const parentRect =
      eyeContainerRef.current.parentElement.getBoundingClientRect();
    const inputRect = inputRef.current.getBoundingClientRect();

    eyeIcon.style.left =
      inputRect.left - parentRect.left + inputRect.width - 20 + 'px';
    eyeIcon.style.top =
      inputRect.top -
      parentRect.top +
      (inputRect.height - containerRect.height) / 2 +
      'px';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        marginBottom: '1em',
        ...style?.container,
      }}
    >
      <TextInput
        label={label}
        htmlFor={htmlFor}
        type={type}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder || 'Enter password'}
        onChange={onChange}
        error={error}
        inputRef={inputRef}
        required
        style={{
          label: { ...style?.label },
          input: {
            ...style?.input,
            paddingRight: '1.5em',
            paddingLeft: '.5em',
          },
        }}
        {...props}
      >
        <ProgressBar style={{ marginTop: '.5em' }} percent={quality} />
      </TextInput>
      {showVisibilityToggle && (
        <span
          style={{
            position: 'absolute',
            display: 'inline-flex',
          }}
          ref={eyeContainerRef}
          onClick={() => setShowPassword((showPass) => !showPass)}
        >
          <EyeIcon />
        </span>
      )}
    </div>
  );
}

PasswordInput.propTypes = {
  /** Label text */
  label: PropTypes.string,

  /** Input field ID */
  htmlFor: PropTypes.string,

  /** Input field value */
  value: PropTypes.string.isRequired,

  /** Input field value min-length */
  minLength: PropTypes.string,

  /** Input field value max-length */
  maxLength: PropTypes.string,

  /** Input field placeholder */
  placeholder: PropTypes.string,

  /** Error message */
  error: PropTypes.string,

  /** Input field change event handler */
  onChange: PropTypes.func.isRequired,

  /** Computed password quality in percent */
  quality: PropTypes.number,

  /** Show visibility toggle icon */
  showVisibilityToggle: PropTypes.bool,

  /** Customized styles */
  style: PropTypes.shape({
    label: PropTypes.object,
    input: PropTypes.object,
  }),
};

export default PasswordInput;

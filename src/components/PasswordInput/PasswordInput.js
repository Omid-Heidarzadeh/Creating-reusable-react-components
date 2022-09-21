import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import TextInput from 'ps-react/TextInput';
import EyeIcon from 'ps-react/EyeIcon';
import ProgressBar from 'ps-react/ProgressBar';

function PasswordInput({
  label = 'Password',
  htmlFor = 'password',
  value,
  onChange,
  quality = 0,
  placeholder,
  showVisibilityToggle = true,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
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

  const onBlur = useCallback(() => {
    if (!isTouched) setIsTouched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <TextInput
        label={label}
        htmlFor={htmlFor}
        type={type}
        value={value}
        placeholder={placeholder || 'Enter password'}
        onChange={onChange}
        onBlur={onBlur}
        error={isTouched && !value ? 'Please enter a password' : ''}
        inputRef={inputRef}
        required
      />
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
      <ProgressBar percent={quality} />
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

  /** Input field placeholder */
  placeholder: PropTypes.string,

  /** Input field change event handler */
  onChange: PropTypes.func.isRequired,

  /** Computed password quality in percent */
  quality: PropTypes.number,

  /** Show visibility toggle icon */
  showVisibilityToggle: PropTypes.bool,
};

export default PasswordInput;

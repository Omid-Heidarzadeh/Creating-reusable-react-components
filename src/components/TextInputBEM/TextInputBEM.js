import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Label from 'ps-react/Label';

function TextInput({
  label,
  htmlFor,
  required,
  type = 'text',
  value,
  minLength = 0,
  maxLength = 100,
  placeholder,
  onChange,
  style,
  error,
  inputRef,
  children,
  ...props
}) {
  const [isTouched, setIsTouched] = useState(false);

  const onBlur = useCallback(() => {
    if (!isTouched) setIsTouched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`textinput ${
        isTouched && error ? 'textinput--state-error' : ''
      }`}
    >
      <Label
        label={label}
        htmlFor={htmlFor}
        required={required}
        className={``}
      />
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'middle',
        }}
      >
        <input
          id={htmlFor}
          type={type}
          placeholder={placeholder}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          className={`textinput__input ${
            isTouched && error ? 'textinput__input--state-error' : ''
          }`}
          ref={inputRef}
          {...props}
        />
        {children}
      </span>
      {isTouched && (
        <div
          className={
            isTouched && error ? 'textinput__message--state-error' : ''
          }
        >
          {error}
        </div>
      )}
    </div>
  );
}

TextInput.propTypes = {
  /** Label text */
  label: PropTypes.string.isRequired,

  /** Input field HTML ID of input element & HTML "For" value of label element */
  htmlFor: PropTypes.string.isRequired,

  /** Specify if this field is required */
  required: PropTypes.bool,

  /** Specify the type of input */
  type: PropTypes.oneOf(['text', 'password', 'number', 'email']),

  /** Input value */
  value: PropTypes.string,

  /** Input field value min-length */
  minLength: PropTypes.string,

  /** Input field value max-length */
  maxLength: PropTypes.string,

  /** Input Placeholder value */
  placeholder: PropTypes.string,

  /** onChange event handler */
  onChange: PropTypes.func,

  /** Input error message */
  error: PropTypes.string,

  /** Input field DOM reference */
  inputRef: PropTypes.instanceOf(React.createRef.prototype),
};

export default TextInput;

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

  // Default styles
  const baseLabelStyle = {
    color: isTouched && error ? 'red' : '',
    marginBottom: '.5em',
  };
  const labelStyle = { ...baseLabelStyle, ...style?.label };
  const baseInputStyle = {
    borderColor: isTouched && error ? 'red' : '',
    lineHeight: 1.5,
  };
  const inputStyle = { ...baseInputStyle, ...style?.input };
  const errorStyle = {
    color: 'red',
    margin: '.5em .25em',
    fontSize: '.75em',
    Height: '1.1em',
  };

  const onBlur = useCallback(() => {
    if (!isTouched) setIsTouched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginBottom: '1em', ...style?.container }}>
      <Label
        label={label}
        htmlFor={htmlFor}
        required={required}
        style={labelStyle}
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
          style={inputStyle}
          ref={inputRef}
          {...props}
        />
        {children}
      </span>
      {isTouched && <div style={errorStyle}>{error}</div>}
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
  inputRef: PropTypes.object,
};

export default TextInput;

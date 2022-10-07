import React from 'react';
import PropTypes from 'prop-types';

/** Field Label */
function Label({ htmlFor, label, required, style }) {
  return (
    <label htmlFor={htmlFor} style={{ display: 'block', ...style }}>
      {label}
      {required && <span style={{ color: 'red' }}>*</span>}
    </label>
  );
}

Label.propTypes = {
  /** Value for HTML "for" attribute of label element */
  htmlFor: PropTypes.string.isRequired,

  /** Label value */
  label: PropTypes.string.isRequired,

  /** Specify required label with red asterisk */
  required: PropTypes.bool,
};

Label.defaultProps = {
  required: false,
};

export default Label;

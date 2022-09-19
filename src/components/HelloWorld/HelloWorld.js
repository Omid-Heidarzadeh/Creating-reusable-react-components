import React from 'react';
import PropTypes from 'prop-types';

/** A super useful component that can be used nowhere */
function HelloWorld({ message }) {
  return <div>Hello, {message}</div>;
}

HelloWorld.propTypes = {
  /** The message to display */
  message: PropTypes.string.isRequired,
};

HelloWorld.defaultProps = {
  message: 'World!',
};

export default HelloWorld;

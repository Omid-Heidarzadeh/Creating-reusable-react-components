import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ height, width, percent, style }) => {
  function getWidth() {
    return parseInt((width / 100) * percent);
  }

  function getBackgroundColor() {
    return percent < 25
      ? 'red'
      : percent < 50
      ? 'orange'
      : percent < 75
      ? '#f4af38'
      : percent < 100
      ? 'yellowgreen'
      : 'green';
  }

  return (
    <div style={{ ...style, width, height }}>
      <div
        style={{
          width: getWidth(),
          height: height,
          backgroundColor: getBackgroundColor(),
        }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  /** Progress bar height in pixels */
  height: PropTypes.number,

  /** Progress bar width in pixels */
  width: PropTypes.number.isRequired,

  /** Progress bar percent */
  percent: PropTypes.number.isRequired,

  /** Customized style */
  style: PropTypes.object,
};

ProgressBar.defaultProps = {
  height: 5,
  width: 150,
  percent: 0,
};

export default ProgressBar;

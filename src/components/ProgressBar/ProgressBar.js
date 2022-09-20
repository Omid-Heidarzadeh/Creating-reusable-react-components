import React from 'react';
import { PropTypes } from 'prop-types';

function ProgressBar({ height, width, percent }) {
  function getWidth() {
    return parseInt((width / 100) * percent);
  }

  function getBackgroundColor() {
    return percent < 25
      ? 'red'
      : percent < 50
      ? 'orange'
      : percent < 75
      ? 'yellow'
      : percent < 100
      ? 'yellowgreen'
      : 'green';
  }

  return (
    <div style={{ width, height }}>
      <div
        style={{
          width: getWidth(),
          height: height,
          backgroundColor: getBackgroundColor(),
        }}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  /** Progress bar height in pixels */
  height: PropTypes.number,
  /** Progress bar width in pixels */
  width: PropTypes.number.isRequired,
  /** Progress bar percent */
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;

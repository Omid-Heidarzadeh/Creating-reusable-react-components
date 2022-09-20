import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** A 80 percent progress bar with 15px height */
function ProgressBar20Percent() {
  return <ProgressBar width={200} height={15} percent={80} />;
}

export default ProgressBar20Percent;

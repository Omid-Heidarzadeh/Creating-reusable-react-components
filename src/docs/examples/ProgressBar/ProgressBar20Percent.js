import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** A 20 percent progress bar */
function ProgressBar20Percent() {
  return <ProgressBar width={200} height={10} percent={20} />;
}

export default ProgressBar20Percent;

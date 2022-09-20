import React from 'react';
import Label from 'ps-react/Label';

/** Required Label */
function RequiredLabel() {
  return <Label htmlFor={'name'} label={'Name'} required />;
}

export default RequiredLabel;

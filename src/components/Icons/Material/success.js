import React from 'react';
import { MaterialIcon } from './style';
import { theme } from '../../../style/globalStyle';

function SuccessIcon() {
  return <MaterialIcon color={theme.successColor}>check_circle</MaterialIcon>;
}

export default SuccessIcon;

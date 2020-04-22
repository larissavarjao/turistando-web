import React from 'react';
import { MaterialIcon } from './style';
import { theme } from '../../../style/globalStyle';

function ErrorIcon() {
  return <MaterialIcon color={theme.errorColor}>error</MaterialIcon>;
}

export default ErrorIcon;

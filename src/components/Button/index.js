import React from 'react';
import { RoundedButtonStyle, RoundedSign } from './style';

export const RoundedButton = (props) => {
  return (
    <RoundedButtonStyle {...props}>
      <RoundedSign>+</RoundedSign>
    </RoundedButtonStyle>
  );
};

export { PrimaryButton, SecondaryButton, PrimaryGhostButton, SecondaryGhostButton } from './style';

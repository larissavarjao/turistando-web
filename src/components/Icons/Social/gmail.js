import React from 'react';
import { SocialIcon } from './style';

const logo = require('../../../assets/images/gmail.png');

function GmailIcon() {
  return (
    <SocialIcon src={logo} alt='logo de gmail para login social com gmail' />
  );
}

export default GmailIcon;

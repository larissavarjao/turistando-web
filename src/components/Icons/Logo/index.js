import React from 'react';
import { LogoWordStyle, LogoImageStyle, LogoStyle } from './style';

const logo = require('./logo.png');

export const LogoWord = (props) => {
  return <LogoWordStyle {...props}>TURISTANDO</LogoWordStyle>;
};

export const LogoImage = () => {
  return <LogoImageStyle src={logo} alt='imagem da logo de um balão' />;
};

export const Logo = () => {
  return (
    <LogoStyle>
      <LogoImage />
      <LogoWord />
    </LogoStyle>
  );
};

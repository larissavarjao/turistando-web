import React from 'react';
import { HeaderContainer, Account, MaterialIconMenu } from './style';

const avatar = require('../../assets/images/bob.jpg');

function Header({ turnOnMenu }) {
  return (
    <HeaderContainer>
      <MaterialIconMenu onClick={turnOnMenu}>menu</MaterialIconMenu>
      <Account src={avatar} alt="imagem do usuário para configurar avatar" />
    </HeaderContainer>
  );
}

export default Header;
export { PageHeader } from './style';

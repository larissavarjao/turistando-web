import React from 'react';
import { HeaderContainer, Account } from './style';
import { MaterialIcon } from '../Icons/Material/style';

const bob = require('../../assets/images/bob.jpg');

function Header({ turnOnMenu }) {
  const avatar = bob;

  return (
    <HeaderContainer>
      <MaterialIcon onClick={turnOnMenu}>menu</MaterialIcon>
      <Account src={avatar} alt="imagem do usuário para configurar avatar" />
    </HeaderContainer>
  );
}

export default Header;
export { PageHeader } from './style';

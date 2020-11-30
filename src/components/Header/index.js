import React, { useContext } from 'react';
import { HeaderContainer, Account } from './style';
import { GlobalStateContext } from '../../context/globalContext';

const bob = require('../../assets/images/bob.jpg');

function Header() {
  const { user } = useContext(GlobalStateContext);

  const avatar = (user && user.avatar) || bob;

  return (
    <HeaderContainer>
      <Account src={avatar} alt="imagem do usuário para configurar avatar" />
    </HeaderContainer>
  );
}

export default Header;
export { PageHeader } from './style';

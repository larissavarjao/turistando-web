import React from 'react';
import { HeaderContainer, Logo, PrimaryGhostButtonWithMargin } from './style';
import { Buttons } from '../style';
import { LogoWord, LogoImage } from '../../../components/Icons/Logo';
import { PrimaryButton } from '../../../components/Button';
import { Link } from '../../../style/globalComponents';

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <LogoImage />
        <LogoWord margin="0 0 0 12px" />
      </Logo>
      <Buttons>
        <Link to="/registrar">
          <PrimaryGhostButtonWithMargin>Registrar</PrimaryGhostButtonWithMargin>
        </Link>
        <Link to="/login">
          <PrimaryButton>Login</PrimaryButton>
        </Link>
      </Buttons>
    </HeaderContainer>
  );
}

export default Header;

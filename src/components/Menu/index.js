import React from 'react';
import { MenuContainer, Logo, NavLinkContainer, MenuTopContainer } from './style';
import { Link } from '../../style/globalComponents';
import { Travel, Dashboard, Route, Finance, Currency } from '../Icons/Menu';

const purpleLogo = require('../../assets/images/logo-invertida.png');

const menuOptions = [
  { icon: <Dashboard />, title: 'Dashboard', to: '/dashboard' },
  { icon: <Travel />, title: 'Viagem', to: '/viagem' },
  { icon: <Route />, title: 'Roteiro', to: '/roteiro' },
  { icon: <Finance />, title: 'Financeiro', to: '/financeiro' },
  { icon: <Currency />, title: 'Câmbio', to: '/cambio' },
];

function Menu() {
  return (
    <MenuContainer>
      <MenuTopContainer>
        <Link to='/dashboard'>
          <Logo src={purpleLogo} alt='Logo para home' />
        </Link>
        <>
          {menuOptions.map((nav) => {
            return (
              <NavLinkContainer key={nav.to} to={nav.to}>
                {nav.icon}
              </NavLinkContainer>
            );
          })}
        </>
      </MenuTopContainer>
    </MenuContainer>
  );
}

export default Menu;

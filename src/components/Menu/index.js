import React from 'react';
import {
  MenuContainer,
  Logo,
  NavLinkContainer,
  MenuTopContainer,
  MaterialIconMenu,
  MenuOptionTitle,
  LogOut,
  MaterialIconClose,
} from './style';
import { Link } from '../../style/globalComponents';
import {
  Travel,
  Dashboard,
  Route,
  Finance,
  Currency,
  Logout,
} from '../Icons/Menu';
import { Loading } from '../ScreenCases';

const purpleLogo = require('../../assets/images/logo-invertida.png');

const menuOptions = [
  { icon: <Dashboard />, title: 'Dashboard', to: '/dashboard' },
  { icon: <Travel />, title: 'Viagem', to: '/viagem' },
  { icon: <Route />, title: 'Roteiro', to: '/roteiro' },
  { icon: <Finance />, title: 'Financeiro', to: '/financeiro' },
  { icon: <Currency />, title: 'Câmbio', to: '/cambio' },
];

function Menu({ menuOpen, loading, toggleOpen, logOut, turnOffMenu }) {
  return (
    <MenuContainer open={menuOpen}>
      <MenuTopContainer open={menuOpen}>
        <Link to="/dashboard">
          <Logo src={purpleLogo} alt="Logo para home" />
        </Link>
        <>
          {menuOptions.map((nav) => {
            return (
              <NavLinkContainer
                onClick={turnOffMenu}
                open={menuOpen}
                key={nav.to}
                to={nav.to}
              >
                {nav.icon}
                <MenuOptionTitle open={menuOpen}>{nav.title}</MenuOptionTitle>
              </NavLinkContainer>
            );
          })}
        </>
      </MenuTopContainer>
      <MaterialIconMenu open={!menuOpen} onClick={toggleOpen}>
        menu
      </MaterialIconMenu>
      <MaterialIconMenu open={menuOpen} onClick={toggleOpen}>
        menu_open
      </MaterialIconMenu>
      <LogOut onClick={logOut}>
        <Logout />
      </LogOut>
      <MaterialIconClose onClick={turnOffMenu}>close</MaterialIconClose>
      {loading && <Loading />}
    </MenuContainer>
  );
}

export default Menu;

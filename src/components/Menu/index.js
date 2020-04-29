import React, { useState, useContext } from 'react';
import {
  MenuContainer,
  Logo,
  NavLinkContainer,
  MenuTopContainer,
  MaterialIconMenu,
  MenuOptionTitle,
  LogOut,
} from './style';
import { Link } from '../../style/globalComponents';
import { Travel, Dashboard, Route, Finance, Currency, Logout } from '../Icons/Menu';
import { GlobalDispatchContext } from '../../context/globalContext';
import { clearLocalStorage } from '../../utils/localStorage';
import { history } from '../../context/history';
import { Loading } from '../ScreenCases';

const purpleLogo = require('../../assets/images/logo-invertida.png');

const menuOptions = [
  { icon: <Dashboard />, title: 'Dashboard', to: '/dashboard' },
  { icon: <Travel />, title: 'Viagem', to: '/viagem' },
  { icon: <Route />, title: 'Roteiro', to: '/roteiro' },
  { icon: <Finance />, title: 'Financeiro', to: '/financeiro' },
  { icon: <Currency />, title: 'Câmbio', to: '/cambio' },
];

function Menu() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useContext(GlobalDispatchContext);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const logOut = () => {
    setLoading(true);
    dispatch({ type: 'LOG_OUT_USER' });
    clearLocalStorage();
    history.push('/');
    setLoading(false);
  };

  return (
    <MenuContainer open={open}>
      <MenuTopContainer open={open}>
        <Link to='/dashboard'>
          <Logo src={purpleLogo} alt='Logo para home' />
        </Link>
        <>
          {menuOptions.map((nav) => {
            return (
              <NavLinkContainer open={open} key={nav.to} to={nav.to}>
                {nav.icon}
                <MenuOptionTitle open={open}>{nav.title}</MenuOptionTitle>
              </NavLinkContainer>
            );
          })}
        </>
      </MenuTopContainer>
      <MaterialIconMenu open={!open} onClick={toggleOpen}>
        menu
      </MaterialIconMenu>
      <MaterialIconMenu open={open} onClick={toggleOpen}>
        menu_open
      </MaterialIconMenu>
      <LogOut onClick={logOut}>
        <Logout />
      </LogOut>
      {loading && <Loading />}
    </MenuContainer>
  );
}

export default Menu;

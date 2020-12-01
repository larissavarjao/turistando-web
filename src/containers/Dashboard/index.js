import React, { useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { Container, DashboardContainer, RightContainer } from './style';
import DashboardHome from './Home';
import Travel from './Travel';
import RouteComponent from './Route';
import Finance from './Finance';
import Currency from './Currency';

import { GlobalDispatchContext } from '../../context/globalContext';
import { clearLocalStorage } from '../../utils/localStorage';
import { history } from '../../context/history';

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useContext(GlobalDispatchContext);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const turnOffMenu = () => setMenuOpen(false);
  const turnOnMenu = () => setMenuOpen(true);

  const logOut = () => {
    setLoading(true);
    dispatch({ type: 'LOG_OUT_USER' });
    clearLocalStorage();
    history.push('/');
    setLoading(false);
  };

  return (
    <Container>
      <Menu
        menuOpen={menuOpen}
        toggleMenuOpen={toggleMenuOpen}
        logOut={logOut}
        loading={loading}
        turnOffMenu={turnOffMenu}
      />
      <RightContainer>
        <Header menuOpen={menuOpen} turnOnMenu={turnOnMenu} />
        <DashboardContainer>
          <Switch>
            <Route path="/dashboard" component={DashboardHome} />
            <Route path="/viagem" component={Travel} />
            <Route path="/roteiro" component={RouteComponent} />
            <Route path="/financeiro" component={Finance} />
            <Route path="/cambio" component={Currency} />
          </Switch>
        </DashboardContainer>
      </RightContainer>
    </Container>
  );
}

export default Dashboard;

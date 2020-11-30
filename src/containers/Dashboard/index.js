import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { Container, DashboardContainer, RightContainer } from './style';
import DashboardHome from './Home';
import Travel from './Travel';
import RouteComponent from './Route';
import Finance from './Finance';
import Currency from './Currency';

function Dashboard() {
  return (
    <Container>
      <Menu />
      <RightContainer>
        <Header />
        <DashboardContainer>
          <Switch>
            <Route path='/dashboard' component={DashboardHome} />
            <Route path='/viagem' component={Travel} />
            <Route path='/roteiro' component={RouteComponent} />
            <Route path='/financeiro' component={Finance} />
            <Route path='/cambio' component={Currency} />
          </Switch>
        </DashboardContainer>
      </RightContainer>
    </Container>
  );
}

export default Dashboard;

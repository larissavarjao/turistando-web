import React from 'react';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import { Container, RightContainer, DashboardContainer } from './style';

function Dashboard() {
  return (
    <Container>
      <Menu />
      <RightContainer>
        <Header />
        <DashboardContainer>Dashboard</DashboardContainer>
      </RightContainer>
    </Container>
  );
}

export default Dashboard;

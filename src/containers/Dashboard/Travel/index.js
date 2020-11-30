import React from 'react';
import { TravelContainer } from './style';
import { Switch, Route } from 'react-router-dom';
import TravelHome from './Home';
import TravelDetails from './Details';
import TravelCreate from './Create';

function Travel() {
  return (
    <TravelContainer>
      <Switch>
        <Route path="/viagem/criar" component={TravelCreate} />
        <Route path="/viagem/:id" component={TravelDetails} />
        <Route path="/viagem" component={TravelHome} />
      </Switch>
    </TravelContainer>
  );
}

export default Travel;

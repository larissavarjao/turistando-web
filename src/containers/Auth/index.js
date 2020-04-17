import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './Register';
import Login from './Login';
import { Container, HalfViewImage, FormContainer, GoBack } from './style';

function Auth() {
  return (
    <Container>
      <HalfViewImage />
      <FormContainer>
        <GoBack to='/'>Voltar</GoBack>
        <GoBack to='/'>Voltar</GoBack>
        <Switch>
          <Route path='/registrar' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </FormContainer>
    </Container>
  );
}

export default Auth;

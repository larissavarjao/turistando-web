import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStateContext, GlobalDispatchContext } from '../../context/globalContext';
import { isUserLogged } from '../../utils/localStorage';

import Home from '../Home';
import Auth from '../Auth';

import Dashboard from '../Dashboard';

function App() {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const dispatchUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const dispatchToken = (token) => {
    dispatch({ type: 'SET_TOKEN', payload: token });
  };

  const isLogged = isUserLogged(state, dispatchUser, dispatchToken);

  if (!isLogged) {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/registrar' component={Auth} />
        <Route exact path='/login' component={Auth} />
        <Redirect path='*' to='/' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/viagem' component={Dashboard} />
      <Route exact path='/roteiro' component={Dashboard} />
      <Route exact path='/financeiro' component={Dashboard} />
      <Route exact path='/cambio' component={Dashboard} />
      <Redirect path='*' to='/dashboard' />
    </Switch>
  );
}

export default App;

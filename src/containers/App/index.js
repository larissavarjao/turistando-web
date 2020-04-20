import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Auth from '../Auth';

function App() {
  const isLogged = false;

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

  return <div>Dashboard</div>;
}

export default App;

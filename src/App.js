import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router';

import Signin from './pages/Signin';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home/Index';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/Profile.context';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <Signin />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;

import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect } from 'react-router-dom';

import Index from './pages/Index';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/error/not-found/" component={NotFound} />
        <Redirect from="*" to="/error/not-found/" />
      </Switch>
    </HashRouter>
  );
}

export default App;

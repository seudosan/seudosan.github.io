import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect } from 'react-router-dom';

import Index from './pages/Index';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/error/not-found/" component={NotFound} />
        <Redirect from="*" to="/error/not-found/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

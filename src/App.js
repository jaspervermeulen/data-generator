import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Persons from './Pages/Persons';
import Addresses from './Pages/Addresses';
import Products from './Pages/Products';
import './Styles/main.scss';

function App() {
  return (
    <Router>

      <Navigation />

      <Switch>
        <Route exact path="/">
          <Redirect to="/fake-person" />
        </Route>
        <Route path="/fake-person">
          <Persons />
        </Route>
        <Route path="/fake-address">
          <Addresses />
        </Route>
        <Route path="/fake-product">
          <Products />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

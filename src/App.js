import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomeScreen from './HomeScreen';
import FirstPage from './FirstPage.js';
import ShoppingScreen from './ShoppingScreen';

export default function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/shopping">Shopping</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shopping">
            <ShoppingScreen />
          </Route>
          <Route path="/login">
            <HomeScreen />
          </Route>
          <Route path="/">
            <FirstPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

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

const gitUrl = "http://mahyar1982.github.io/software-modeling-demo";

export default function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href={`/${gitUrl}`}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`/${gitUrl}/login`}>login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`/${gitUrl}/shopping`}>Shopping</a>
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

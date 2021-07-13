import React from 'react';
import './App.css';
import Categories from './pages/Categories';
import Tasks from './pages/Tasks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Tasks />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Redirect from="/" to="/tasks" />
        </Switch>
      </Router>

  );
}

export default App;

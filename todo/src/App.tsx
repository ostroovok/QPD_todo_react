import React from 'react';
import './App.css';
import Categories from './pages/Categories';
import Tasks from './pages/Tasks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;

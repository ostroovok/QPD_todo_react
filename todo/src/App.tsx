import React from 'react';
import './App.css';
import Categories from './pages/Categories';
import Tasks from './pages/Tasks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Tasks />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories/Categories";
import Tasks from "./pages/Tasks/Tasks";
import { Header } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Header />
        
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
    </div>
  );
}

export default App;

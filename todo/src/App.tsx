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
import { LoaderSpinner } from './components';
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
      {promiseInProgress && <LoaderSpinner />}
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Header />
        <LoadingIndicator />
        
        <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Redirect to="/tasks" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

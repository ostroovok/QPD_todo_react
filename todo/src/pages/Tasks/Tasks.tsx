import { Switch, Route, useRouteMatch } from "react-router-dom";
import { TasksModule, TaskFormModule } from "../../modules";

const Tasks = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <>
      <TasksModule />

      <Switch>
        <Route path={`${path}/:id`}>
          <TaskFormModule />
        </Route>
      </Switch>
    </>
  );
};

export default Tasks;

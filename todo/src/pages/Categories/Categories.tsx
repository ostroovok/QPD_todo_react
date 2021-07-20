import { Switch, Route, useRouteMatch } from "react-router-dom";
import { CategoriesModule, CategoryFormModule } from "../../modules";

const Categories = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <>
      <CategoriesModule />

      <Switch>
        <Route path={`${path}/:id`}>
          <CategoryFormModule />
        </Route>
      </Switch>
    </>
  );
};

export default Categories;

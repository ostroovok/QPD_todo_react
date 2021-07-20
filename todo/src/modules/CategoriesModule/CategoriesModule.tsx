import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CategoryTitle } from "./CategoryTitle";
import { List } from "../../components";
import { RootState } from "../../store/store";
import { delCategory } from "../../store/categorySlices";

const CategoriesModule: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const categories = useSelector(
    (state: RootState) => state.todos.categories.list
  );

  const items = categories.map((c: any) => ({
    description: c.description,
    title: <CategoryTitle title={c.title} />,
    itemId: c.id,
  }));

  const onChangeClickHandler = (rowId: number) => {
    history.push(`/categories/${rowId}`);
  };
  const onDeleteClickHandler = (rowId: number) => {
    dispatch(delCategory(rowId));
  };

  return (
    <List
      items={items}
      changeButtonTitle="Изменить категорию"
      onChangeClick={onChangeClickHandler}
      deleteButtonTitle="Удалить категорию"
      onDeleteClick={onDeleteClickHandler}
    />
  );
};

export default CategoriesModule;

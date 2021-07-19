import { useSelector } from "react-redux";
import { CategoryTitle } from "./CategoryTitle";
import { List } from "../../components";
import { RootState } from "../../store/store";

function Categories() {
  const categories = useSelector(
    (state: RootState) => state.todos.categories.list
  );

  const items = categories.map((c: any) => ({
    description: c.description,
    title: <CategoryTitle title={c.title} />,
    itemId: c.id,
  }));

  const onChangeClickHandler = (rowId: number) => {
    console.log(`Изменяем категорию с id=${rowId}`);
  };
  const onDeleteClickHandler = (rowId: number) => {
    console.log(`Удаляем категорию с id=${rowId}`);
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
}

export default Categories;

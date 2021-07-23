import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CategoryTitle } from "./CategoryTitle";
import { List, Modal } from "../../components";
import { RootState } from "../../store/store";
import { Category, delCategory } from "../../store/categorySlices";
import { useState } from "react";
import { categoryServices } from "../../services/CategoryServices/CategoryServices";
import { taskServices } from "../../services/TaskServices/TaskServices";

const CategoriesModule: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState<number | undefined>(0);
  const [isOpen, setIsOpen] = useState(false);

  const categories = useSelector(
    (state: RootState) => state.todos.categories.list
  );

  const items = categories.map((c: Category) => ({
    description: c.description,
    title: <CategoryTitle title={c.title} />,
    itemId: c.id,
  }));

  const onChangeClickHandler = (rowId: number) => {
    history.push(`/categories/${rowId}`);
  };
  const onDeleteClickHandler = (rowId: number) => {
    setCategoryId(rowId);
    setIsOpen(true);
  };

  return (
    <>
      <List
        items={items}
        changeButtonTitle="Изменить категорию"
        onChangeClick={onChangeClickHandler}
        deleteButtonTitle="Удалить категорию"
        onDeleteClick={onDeleteClickHandler}
      />

      {isOpen && (
        <Modal
          firstbtnTitle="Да"
          secondbtnTitle="Нет"
          modalTitle="Удаление категории"
          onCancel={() => {
            setCategoryId(undefined);
            setIsOpen(false);
          }}
          onSubmit={() => {
            categoryServices.delete(Number(categoryId));
            taskServices.delCategoryId(Number(categoryId));
            dispatch(delCategory(Number(categoryId)));

            setCategoryId(undefined);
            setIsOpen(false);
          }}
        >
          <div>Вы действительно хотите удалить категорию?</div>
        </Modal>
      )}
    </>
  );
};

export default CategoriesModule;

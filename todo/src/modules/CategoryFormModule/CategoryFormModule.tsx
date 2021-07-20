import { ChangeEventHandler, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { CategoryForm, Modal } from "../../components";
import { addCategory, changeCategory } from "../../store/categorySlices";
import { RootState } from "../../store/store";

const CategoryFormModule: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();

  const category = useSelector((state: RootState) => {
    if (id === "new") {
      return { title: "", description: "" };
    }

    return state.todos.categories.list.find((c) => c.id === +id);
  });

  // ================== Секция: управление состоянием формы ========================

  const [title, setTitle] = useState<string>(category?.title || "");
  const [description, setDescription] = useState<string>(
    category?.description || ""
  );

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      switch (event.target.name) {
        case "title":
          setTitle(event.target.value);
          break;
        case "description":
          setDescription(event.target.value);
          break;
      }
    },
    []
  );

  // ================== Конец секции: управление состоянием формы ========================

  // ================== Секция: обработчики для модалки ========================

  const onCancelHander = useCallback(() => {
    history.push("./categories");
  }, [history]);

  const onSubmitHandler = useCallback(() => {
    if (id === "new") {
      dispatch(addCategory({ title, description }));
    } else {
      dispatch(changeCategory({ title, description, id: +id }));
    }

    history.push("./categories");
  }, [history, description, id, dispatch, title]);

  // ================== Конец секции: обработчики для модалки ========================

  // Если id !== new и мы не нашли категорию в базе (нам нечего редактировать) => некорректный URI
  if (!category) {
    history.push("/categories");
    return null;
  }

  return (
    <Modal
      modalTitle={
        id === "new" ? "Создать категорию" : "Редактировать категорию"
      }
      firstbtnTitle={id === "new" ? "Создать" : "Сохранить"}
      secondbtnTitle="Закрыть"
      onCancel={onCancelHander}
      onSubmit={onSubmitHandler}
    >
      <CategoryForm
        title={title}
        description={description}
        onChange={onChangeHandler}
      />
    </Modal>
  );
};

export default CategoryFormModule;

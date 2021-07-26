import { ChangeEventHandler, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { InputProps } from "src/types";
import { CategoryForm, Modal } from "../../components";
import { categoryServices } from "../../services/CategoryServices/CategoryServices";
import { addCategory, changeCategory } from "../../store/categorySlices";
import { RootState } from "../../store/store";

const validationInput = (props: {
  title: InputProps;
  description: InputProps;
}): { titleVal: boolean; descriptionVal: boolean } => {
  let result = {
    titleVal: true,
    descriptionVal: true,
  };
  if (props.title.value.replace(" ", "") === "") {
    result.titleVal = false;
  }
  if (props.description.value.replace(" ", "") === "") {
    result.descriptionVal = false;
  }

  return result;
};

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

  const [title, setTitle] = useState<{ value: string; touched: boolean }>({
    value: category?.title || "",
    touched: false,
  });
  const [description, setDescription] = useState<{
    value: string;
    touched: boolean;
  }>({ value: category?.description || "", touched: false });

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      switch (event.target.name) {
        case "title":
          setTitle((state) => ({
            value: event.target.value,
            touched: state.touched || event.target.value.length > 0,
          }));
          break;
        case "description":
          setDescription((state) => ({
            value: event.target.value,
            touched: state.touched || event.target.value.length > 0,
          }));
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
    const { titleVal, descriptionVal } = validationInput({
      title,
      description,
    });
    if (!titleVal || !descriptionVal) {
      return null;
    }

    if (id === "new") {
      categoryServices
        .insert({
          title: title.value,
          description: description.value,
        })
        .then((result) => {
          dispatch(
            addCategory({
              title: title.value,
              description: description.value,
              id: result ? Number(result) : NaN,
            })
          );
        });
    } else {
      categoryServices.update(+id, {
        id: +id,
        title: title.value,
        description: description.value,
      });

      dispatch(
        changeCategory({
          title: title.value,
          description: description.value,
          id: +id,
        })
      );
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

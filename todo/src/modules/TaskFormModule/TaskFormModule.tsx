import React, { FocusEventHandler } from "react";
import { useCallback } from "react";
import { ChangeEventHandler } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Modal, TaskForm } from "src/components";
import { RootState } from "src/store/store";
import { addTask, changeTask } from "src/store/tasksSlices";
import { taskServices } from "src/services/TaskServices/TaskServices";
import { InputProps } from "src/types";

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

const TaskFormModule: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();

  const task = useSelector((state: RootState) => {
    if (id === "new") {
      return {
        title: "",
        description: "",
        category: undefined,
      };
    }
    return state.todos.tasks.list.find((t) => t.id === +id);
  });

  const [title, setTitle] = useState<{ value: string; touched: boolean }>({
    value: task?.title || "",
    touched: false,
  });
  const [description, setDescription] = useState<{
    value: string;
    touched: boolean;
  }>({ value: task?.description || "", touched: false });
  const [category, setCategory] = useState<number | undefined>(task?.category);

  const categories = useSelector(
    (state: RootState) => state.todos.categories.list
  );

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      console.log(event.target.value.length > 0)
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
        case "category":
          setCategory(+event.target.value);
          break;
      }
    },
    []
  );

  const onSelectHandler: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => {
      setCategory(+event.target.value);
    },
    []
  );

  const onCancelHandler = useCallback(() => {
    history.push("./tasks");
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
      taskServices.insert({
        title: title.value,
        category: category,
        description: description.value,
      });
      dispatch(
        addTask({
          title: title.value,
          description: description.value,
          category,
        })
      );
    } else {
      taskServices.update(+id, {
        id: +id,
        title: title.value,
        description: description.value,
        category: category,
      });

      dispatch(
        changeTask({
          title: title.value,
          description: description.value,
          id: +id,
          category,
        })
      );
    }

    history.push("./tasks");
  }, [history, description, id, dispatch, title, category]);

  if (!task) {
    history.push("/task");
    return null;
  }

  return (
    <Modal
      modalTitle={id === "new" ? "Создать задачу" : "Редактировать задачу"}
      firstbtnTitle={id === "new" ? "Создать" : "Сохранить"}
      secondbtnTitle="Закрыть"
      onCancel={onCancelHandler}
      onSubmit={onSubmitHandler}
    >
      <TaskForm
        title={title}
        description={description}
        onChangeInput={onChangeHandler}
        onChangeCategory={onSelectHandler}
        categories={categories.map((c) => ({ label: c.title, value: c.id }))}
        selectedCategory={category}
      />
    </Modal>
  );
};

export default TaskFormModule;

import React from "react";
import { useCallback } from "react";
import { ChangeEventHandler } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Modal, TaskForm } from "../../components";
import { RootState } from "../../store/store";
import { addTask, changeTask } from "../../store/tasksSlices";

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

  const [title, setTitle] = useState<string>(task?.title || "");
  const [description, setDescription] = useState<string>(
    task?.description || ""
  );
  const [category, setCategory] = useState<number | undefined>(task?.category);

  const categories = useSelector(
    (state: RootState) => state.todos.categories.list
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

  const onCancelHander = useCallback(() => {
    history.push("./tasks");
  }, [history]);

  const onSubmitHandler = useCallback(() => {
    if (id === "new") {
      dispatch(addTask({ title, description, category }));
    } else {
      dispatch(
        changeTask({
          title,
          description,
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
      onCancel={onCancelHander}
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

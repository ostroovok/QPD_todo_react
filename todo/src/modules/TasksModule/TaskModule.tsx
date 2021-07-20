import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskTitle } from "../../pages/Tasks/TaskTitle";
import { List } from "../../components";
import { RootState } from "../../store/store";
import { Task } from "../../store/tasksSlices";
import { useHistory } from "react-router-dom";

const TaskModule: React.FC = () => {
  const history = useHistory();

  const [tasks, categories] = useSelector((state: RootState) => [
    state.todos.tasks.list,
    state.todos.categories.list,
  ]);

  const items = tasks.map((t: Task) => {
    const categoryTitle = t.category
      ? categories.find((c: any) => c.id === t.category)?.title
      : undefined;

    return {
      description: t.description,
      title: <TaskTitle title={t.title} categoryTitle={categoryTitle} />,
      itemId: t.id,
    };
  });

  const onChangeClickHandler = (rowId: number) => {
    history.push(`/tasks/${rowId}`)
  };
  const onDeleteClickHandler = (rowId: number) => {
    history.push(`/tasks/del/${rowId}`)
  };

  return (
    <List
      items={items}
      changeButtonTitle="Изменить задачу"
      onChangeClick={onChangeClickHandler}
      deleteButtonTitle="Удалить задачу"
      onDeleteClick={onDeleteClickHandler}
    />
  );
};

export default TaskModule;

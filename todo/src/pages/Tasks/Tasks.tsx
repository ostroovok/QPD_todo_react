import React from "react";
import { useSelector } from "react-redux";
import { TaskTitle } from "./TaskTitle";
import { List } from "../../components";
import { RootState } from "../../store/store";

const Tasks: React.FC = () => {
  const [tasks, categories] = useSelector((state: RootState) => [
    state.todos.tasks.list,
    state.todos.categories.list,
  ]);

  const items = tasks.map((t: any) => {
    return {
      description: t.description,
      title: (
        <TaskTitle
          title={t.title}
          categoryTitle={
            t.categoryId &&
            categories.find((c: any) => (c.id = t.categoryId))?.title
          }
        />
      ),
      itemId: t.id,
    };
  });

  const onChangeClickHandler = (rowId: number) => {
    console.log(`Изменяем задачу с id=${rowId}`);
  };
  const onDeleteClickHandler = (rowId: number) => {
    console.log(`Удаляем задачу с id=${rowId}`);
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

export default Tasks;

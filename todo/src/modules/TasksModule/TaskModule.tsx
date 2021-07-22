import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskTitle } from "../../pages/Tasks/TaskTitle";
import { List, Modal } from "../../components";
import { RootState } from "../../store/store";
import { delTask, Task } from "../../store/tasksSlices";
import { useHistory } from "react-router-dom";
import { TaskServices } from "../../services/TaskServices";

const TaskModule: React.FC = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState<number | undefined>(undefined);
  const dispatch = useDispatch();

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
    history.push(`/tasks/${rowId}`);
  };
  const onDeleteClickHandler = (rowId: number) => {
    setTaskId(rowId);
    setIsOpen(true);
  };

  return (
    <>
      <List
        items={items}
        changeButtonTitle="Изменить задачу"
        onChangeClick={onChangeClickHandler}
        deleteButtonTitle="Удалить задачу"
        onDeleteClick={onDeleteClickHandler}
      />

      {isOpen && (
        <Modal
          firstbtnTitle="Да"
          secondbtnTitle="Нет"
          modalTitle="Удаление задачи"
          onCancel={() => {
            setTaskId(undefined);
            setIsOpen(false);
          }}
          onSubmit={() => {
            dispatch(delTask(Number(taskId)));

            setTaskId(undefined);
            setIsOpen(false);
          }}
        >
          <div>Вы действительно хотите удалить задачу?</div>
        </Modal>
      )}
    </>
  );
};

export default TaskModule;

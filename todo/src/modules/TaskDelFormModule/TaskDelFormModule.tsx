import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Modal } from "../../components";
import { RootState } from "../../store/store";
import { delTask } from "../../store/tasksSlices";

const TaskDelFormModule: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();

  const task = useSelector((state: RootState) => {
    return state.todos.tasks.list.find((t) => t.id === +id);
  });

  const onCancelHander = useCallback(() => {
    history.push("./tasks");
  }, [history]);

  const onSubmitHandler = useCallback(() => {
      dispatch(delTask(+id));
    history.push("./categories");
  }, [history, id, dispatch, ]);

  if (!task) {
    history.push("/task");
    console.log('undefined')
    return null;
  }

  return (
    <Modal
      modalTitle='Удаление задачи'
      firstbtnTitle='Да'
      secondbtnTitle="Нет"
      onCancel={onCancelHander}
      onSubmit={onSubmitHandler}
    >
      <form>
        <div>Вы действительно хотите удалить "{task?.title}"?</div>
      </form>
    </Modal>
  );
};

export default TaskDelFormModule;
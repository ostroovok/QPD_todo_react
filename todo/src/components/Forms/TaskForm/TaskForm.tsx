import { ChangeEventHandler } from "react";

interface TaskFormProps {
  title: string;
  selectedCategory?: number;
  categories: { label: string; value: number }[];
  description: string;
  onChangeInput: ChangeEventHandler<HTMLInputElement>;
  onChangeCategory: ChangeEventHandler<HTMLSelectElement>;
}

const TaskForm: React.FC<TaskFormProps> = ({
  title,
  description,
  selectedCategory,
  categories,
  onChangeInput,
  onChangeCategory,
}) => {
  return (
    <form>
      <div>
        <fieldset className="name1">
          <legend>Имя</legend>
          <input
            id="title"
            name="title"
            placeholder="Введите имя задачи"
            value={title}
            onChange={onChangeInput}
          ></input>
        </fieldset>
        <span>
          <fieldset className="category">
            <legend>Категория</legend>
            <select
                id="category"
                name="category"
              value={
                (selectedCategory &&
                  categories.find((c) => c.value === selectedCategory)
                    ?.value) ||
                "default"
              }
              onChange={onChangeCategory}
            >
              <option value="default" selected>
                Выберите категорию
              </option>
              {categories.map((c) => (
                <option value={c.value}>{c.label}</option>
              ))}
            </select>
          </fieldset>
        </span>
      </div>
      <div>
        <fieldset className="description">
          <legend>Описание</legend>
          <input
            id="description"
            name="description"
            placeholder="Введите описание задачи"
            value={description}
            onInput={onChangeInput}
          ></input>
        </fieldset>
      </div>
    </form>
  );
};

export default TaskForm;

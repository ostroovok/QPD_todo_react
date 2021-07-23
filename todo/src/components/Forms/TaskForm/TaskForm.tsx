import { ChangeEventHandler } from "react";
import styles from "../Forms.module.css";

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
    <form noValidate>
      <div>
        <fieldset className={styles["name1"]}>
          <legend>Имя</legend>
          <input
            required={true}
            id="title"
            name="title"
            placeholder="Введите имя задачи"
            value={title}
            onChange={onChangeInput}
            maxLength={255}
          ></input>
        </fieldset>
        <span>
          <fieldset className={styles["category"]}>
            <legend>Категория</legend>
            <select
              required={true}
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
        <fieldset className={styles["description"]}>
          <legend>Описание</legend>
          <input
            id="description"
            name="description"
            placeholder="Введите описание задачи"
            value={description}
            onInput={onChangeInput}
            required={true}
            maxLength={1536}
          ></input>
        </fieldset>
      </div>
    </form>
  );
};

export default TaskForm;

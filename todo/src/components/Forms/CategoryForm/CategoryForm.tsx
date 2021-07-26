import { ChangeEventHandler } from "react";
import { InputProps } from "src/types";
import styles from '../Forms.module.css'

interface CategoryFormProps {
  title: InputProps;
  description: InputProps;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  title,
  description,
  onChange,
}) => {
  return (
    <form>
      <div>
        <fieldset className={styles["name2"]}>
          <legend>Имя</legend>
          <input
            required={title.touched && true}
            id="title"
            name="title"
            placeholder="Введите имя категории"
            value={title.value}
            onChange={onChange}
            maxLength={255}
          ></input>
        </fieldset>
      </div>
      <div>
        <fieldset className={styles["description"]}>
          <legend>Описание</legend>
          <input
            required={description.touched && true}
            id="description"
            name="description"
            placeholder="Введите описание категории"
            value={description.value}
            onChange={onChange}
            maxLength={512}
          ></input>
        </fieldset>
      </div>
    </form>
  );
};

export default CategoryForm;

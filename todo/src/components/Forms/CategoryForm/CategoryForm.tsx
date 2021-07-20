import { ChangeEventHandler } from "react";

interface CategoryFormProps {
  title: string;
  description: string;
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
        <fieldset className="name2">
          <legend>Имя</legend>
          <input
            id="title"
            name="title"
            placeholder="Введите имя категории"
            value={title}
            onChange={onChange}
          ></input>
        </fieldset>
      </div>
      <div>
        <fieldset className="description">
          <legend>Описание</legend>
          <input
            id="description"
            name="description"
            placeholder="Введите описание категории"
            value={description}
            onChange={onChange}
          ></input>
        </fieldset>
      </div>
    </form>
  );
};

export default CategoryForm;

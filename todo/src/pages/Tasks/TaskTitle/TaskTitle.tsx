import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import styles from "./TaskTitle.module.css";

interface TaskTitleProps {
  title: string;
  categoryTitle?: string;
}

const TaskTitle: React.FC<TaskTitleProps> = ({ title, categoryTitle }) => {
  return (
    <div>
      <span>
        <span className={styles["list-element-title"]}>{title}</span>
        {categoryTitle && (
          <>
            <FontAwesomeIcon icon={faFolder} size="lg" color="cornflowerblue" />
            <span className={styles["list-element-category"]}>
              {categoryTitle}
            </span>
          </>
        )}
      </span>
    </div>
  );
};

export default TaskTitle;

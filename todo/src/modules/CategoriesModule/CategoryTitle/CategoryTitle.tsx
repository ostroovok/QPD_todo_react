import React from "react";
import styles from "./CategoryTitle.module.css";

interface CategoryTitleProps {
  title: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ title }) => {
  return (
    <div>
      <span>
        <span className={styles["list-element-title"]}>{title}</span>
      </span>
    </div>
  );
};

export default CategoryTitle;

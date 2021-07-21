import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

interface IHeaderMenuElement {
  title: string;
  link: string;
}

const HeaderMenuElement: React.FC<IHeaderMenuElement> = ({ link, title }) => {
  return (
    <span className={styles["navLinks"]}>
      <NavLink to={link} activeClassName={styles["selected"]}>
        {title}
      </NavLink>
    </span>
  );
};

const Brand: React.FC<{ text: string }> = (props) => {
  return <div className={styles["header-logo"]}>{props.text}</div>;
};

function Header() {
  const location = useLocation();

  return (
    <div className={styles["header"]}>
      <Brand text="ToDo List" />

      <div className={styles["scrollmenu"]}>
        <HeaderMenuElement title="Задачи" link="/tasks" />
        <span>|</span>

        <HeaderMenuElement title="Категории" link="/categories" />
      </div>

      <div className={styles["actionmenu"]}>
        {location.pathname.startsWith("/categories") && (
          <NavLink to="/categories/new">Добавить категорию</NavLink>
        )}
        {location.pathname.startsWith("/tasks") && (
          <NavLink to="/tasks/new">Добавить задачу</NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;

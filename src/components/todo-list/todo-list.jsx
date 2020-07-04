import React from "react";
import ToDoListItem from "../todo-list-item";
import "./todo-list.scss";

// компонента которая хранит каждую задачу
const ToDoList = ({ todos, onDelete, onImportant }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ToDoListItem
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
        onImportant={() => onImportant(id)}
      />
    );
  });

  return <div className="task-table">{elements}</div>;
};

export default ToDoList;

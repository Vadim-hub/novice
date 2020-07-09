import React from "react";
import ToDoListItem from "../todo-list-item";
import "./todo-list.scss";

// компонента которая хранит каждую задачу (в качестве пропсов передали наш массив todos и методы)
const ToDoList = ({ todos, onDelete, onImportant, onToggle, onToggle2 }) => {
  // с помощью метода map перебираем массив todos, который передали
  const elements = todos.map((item) => {
    // деструктуризация массива по свойству id
    const { id, ...itemProps } = item;
    return (
      <ToDoListItem
        {...itemProps} // спрэд-оператор позволил записать все свойства объекта сокращенно
        key={id}
        onImportant={() => onImportant(id)}
        onDelete={() => onDelete(id)}
        onToggle={() => onToggle(id)}
        onToggle2={() => onToggle2(id)}
      />
    );
  });

  return <div className="task-table">{elements}</div>;
};

export default ToDoList;

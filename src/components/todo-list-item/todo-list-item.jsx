import React from "react";
import "./todo-list-item.scss";
// второй вариант добавления стилей (кастомизация) через css-модули чтобы каждый класс был уникальным (уникальность добавляется React автоматически)
/* import s from "./todo-list.module.css"; */

class ToDoListItem extends React.Component {
  /* constructor() {
    // метод который хранит все те параметры которые передаются классу
    super();
    this.state = {
      doneOk: false,
      importantOk: false,
    };
  } */
  // Более простой вариант объявления локального состояния компоненты
  /* state = {
    doneOk: false,
  }; */

  render() {
    console.log(this.state); // state позволяет отслеживать какое состояние текущее как оно изменяется
    console.log(this.props); // вывести все props элемента
    const { message, important, done, onImportant } = this.props;
    let classNameText = "task-text"; // название класса вынесено в переменную
    let classNameStar = "task-text";

    let clickHandler = () => {
      // передаем ввиде пропса метод onToggle который изменяет в обе стороны состоние активное/неактивное
      this.props.onToggle();
      // меняем состояние при нажатии c false на true
      /* this.setState( 
        (prevState) => {
          // более правильно для изменения состояния использовать функцию В качестве параметра передает те поля которые нужно изменить
          return {
            done: !prevState.done, // ! - менять предыдущее состояние на обратное (! - "не" чтобы менять в обе стороны)
          };
        }
      ); */
    };

    let clickHandler2 = () => {
      /* this.setState((prevState) => {
        return {
          important: !prevState.important,
        };
      }); */
    };

    let removeHandler = () => {
      this.props.onDelete();
    };

    let removeHandler2 = () => {
      this.props.onImportant();
    };

    if (done) {
      classNameText += " task_is_done";
    }

    if (important) {
      classNameStar += " important";
    }
    return (
      <div className="task-item">
        {/* класс (className) задается через переменную (classNameText) ранее введенную */}
        <span
          className={classNameText}
          onClick={() => {
            clickHandler();
          }}
          className={classNameStar}
        >
          {message}
        </span>{" "}
        <div className="controls">
          <i
            className="fa fa-trash"
            onClick={() => {
              removeHandler();
            }}
          />
          <i
            className="fa fa-star"
            onClick={() => {
              clickHandler2();
            }}
            /* onClick={() => {
              removeHandler2();
            }} */
          />
        </div>
      </div>
    );
  }
}

export default ToDoListItem;

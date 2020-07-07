import React from "react";
import "./todo-list-item.scss";
// второй вариант добавления стилей (кастомизация) через css-модули чтобы каждый класс был уникальным (уникальность добавляется React автоматически)
/* import s from "./todo-list.module.css"; */

class ToDoListItem extends React.Component {
  constructor() {
    // метод который хранит все те параметры которые передаются классу
    super();
    this.state = {
      doneOk: false, // false - по умолчанию состояние незавершенное
      importantOk: false,
    };
  }
  // Более просто простой вариант объявления состояния компоненты
  /* state = {
    doneOk: false,
  }; */

  render() {
    console.log(this.state); // state позволяет отслеживать какое состояние текущее как оно изменяется
    console.log(this.props); // вывести все props элемента
    const { message, onDelete, onImportant } = this.props;
    let classNameText = "task-text"; // название класса вынесено в переменную
    let classNameStar = "task-text";

    let clickHandler = () => {
      // меняем состояние при нажатии c false на true
      this.setState(
        // метод setState изменяет состояние при нажатии c false на true (по умолчанию у данного метода первый параметр - это предыдущее состояние)
        /* {doneOk: true,} */
        (prevState) => {
          // более правильно для изменения состояния использовать функцию В качестве параметра передает те поля которые нужно изменить
          return {
            doneOk: !prevState.doneOk, // ! - менять предыдущее состояние на обратное (! - "не" чтобы менять в обе стороны)
          };
        }
      );
    };

    let clickHandler2 = () => {
      this.setState((prevState) => {
        return {
          importantOk: !prevState.importantOk,
        };
      });
    };

    let removeHandler = () => {
      this.props.onDelete();
    };

    let removeHandler2 = () => {
      this.props.onImportant();
    };

    if (this.state.doneOk) {
      classNameText += " task_is_done";
    }

    if (this.state.importantOk) {
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

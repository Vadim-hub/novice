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

    let clickHandler = () => {
      /* this.state.doneOk = true; // меняем состояние при нажатии c false на true
      console.log(this.state); */
      this.setState(
        // метод setState изменяет состояние при нажатии c false на true (по умолчанию у данного метода первый параметр - это предыдущее состояние)
        /* {doneOk: true,} */
        (prevState) => {
          // более правильно для изменения состояния использовать функцию В качестве параметра передает те поля которые нужно изменить
          return {
            doneOk: !prevState.doneOk, // ! - менять предыдущее состояние на обратное
          };
        }
      );
    };

    let clickHandler2 = () => {
      this.setState((prevState2) => {
        return {
          importantOk: !prevState2.importantOk,
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
    return (
      <div className="task-item">
        <span
          className={classNameText}
          onClick={() => {
            clickHandler();
          }}
        >
          {message}
        </span>{" "}
        <div className="controls">
          <i
            className="fa fa-trash redcolor"
            onClick={() => {
              removeHandler();
            }}
          />
          <i className="fa fa-star" />
        </div>
      </div>
    );

    if (this.state.importantOk) {
      classNameText += " important";
    }
    return (
      <div className="task-item">
        <span
          className={classNameText}
          onClick={() => {
            clickHandler2();
          }}
        >
          {message}
        </span>{" "}
        <div className="controls">
          <i
            className="fa fa-trash redcolor"
            onClick={() => {
              removeHandler2();
            }}
          />
          <i className="fa fa-star" />
        </div>
      </div>
    );
  }
}

/* const ToDoListItem = (props) => {
  const { message } = props;
  let classNameText = "task-text"; // название класса вынесено в переменную
  let clickHandler = () => {
    console.log(message);
  };
  return (
    <div className="task-item">
      <span
        className={classNameText}
        onClick={() => {
          clickHandler();
        }}
      
        {message}
      </span>{" "}
      /* класс задается через переменную ранее введенную */
/* <div className="controls">
        <i className="fa fa-trash red-color" />
        <i className="fa fa-star" />
      </div>
    </div>
  );
}; */

/* switch (this.state) {
  case doneOk:
    return (
      <div className="task-item">
        <span
          className={classNameText}
          onClick={() => {
            clickHandler();
          }}
        >
          {message}
        </span>{" "}
        <div className="controls">
          <i
            className="fa fa-trash redcolor"
            onClick={() => {
              removeHandler();
            }}
          />
          <i className="fa fa-star" />
        </div>
      </div>
    );
    break;
  case importantOk:
    return (
      <div className="task-item">
        <span
          className={classNameText}
          onClick={() => {
            clickHandler2();
          }}
        >
          {message}
        </span>{" "}
        <div className="controls">
          <i
            className="fa fa-trash redcolor"
            onClick={() => {
              removeHandler2();
            }}
          />
          <i className="fa fa-star" />
        </div>
      </div>
    );
    break;
  default:
    console.log("Sorry, we are out.");
} */

export default ToDoListItem;

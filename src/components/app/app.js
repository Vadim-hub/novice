import React from "react";
import Header from "../app-header";
import InputSearch from "../input-search";
import TaskFilter from "../task-filter";
import ToDoList from "../todo-list";
import CreateNewElement from "../create-new-element";
import Statistics from "../statistics";

import "./app.scss";

// чтобы добавить интерактивность используются обработчики событий (чтобы получить какой-либо результат) (например, onClick)
class App extends React.Component {
  // данные (todolist) передаем главной компоненте
  state = {
    // в качестве состояние вынесен массив (структура данных) с объектами (у которых свойства message, important, done, id)
    todolist: [
      { message: "Task 1", important: false, done: false, id: 1 }, // хранится состояние каждой Task
      { message: "Task 2", important: false, done: false, id: 2 },
      { message: "Task 3", important: false, done: false, id: 3 },
    ],
  };

  // инициализируем в главной компоненте наши методы onDelete и onImportant, сгенерировали наше событие которое передаем потом дочерним компонентам в виде пропса
  onDelete(id) {
    console.log(id);
  }

  onImportant = (id) => {
    console.log(id);
    const imprt = this.state.todolist.filter((elem) => {
      return elem.id === id;
    });
    /* console.log(imprt);
    this.setState((prevState) => {
      return {this.state.todolist.importantOk: !prevState.importantOk}
    }) */
  };

  render() {
    const { todolist } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <hr />
        <InputSearch />
        <TaskFilter />
        <ToDoList
          todos={todolist}
          onDelete={this.onDelete}
          onImportant={this.onImportant}
        />
        {/* через todos передаем все пропсы, которые будут добавляться и создали обработчик onDelete (передали сгенерированное событие в виде пропса) */}
        <CreateNewElement />
        <hr />
        <Statistics />
      </div>
    );
  }
}

export default App;

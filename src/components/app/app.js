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
  // данные (todolist) передаем главной компоненте, как и все методы, с которыми будем работать
  state = {
    // в качестве состояние вынесен массив (структура данных) с объектами, все элементы списка, (у которых свойства message, important, done, id)
    todolist: [
      { message: "Task 1", important: false, done: false, id: 1 }, // хранится состояние каждой Task
      { message: "Task 2", important: false, done: false, id: 2 },
      { message: "Task 3", important: false, done: false, id: 3 },
    ],
  };

  // инициализируем в главной компоненте наши методы onDelete и onImportant, сгенерировали наше событие которое передаем потом дочерним компонентам в виде пропса
  onDelete = (id) => {
    // промежуточная проверка
    console.log(id);
    // перебираем массив todolist и оставляем в массиве только элементы с другими айдишниками, которые проходят условие (элементы которые мы не удалили)
    this.setState((prev) => {
      const todos = prev.todolist.filter((todo) => {
        return todo.id !== id; // проверили чтобы индификатор не был равен тому айдишнику на который мы нажали (условие), таким образом происходит исключение элемента
      });
      console.log(todos); // возвращаем отфильтрованный массив без изменения состояния
      return {
        todolist: todos, // присвоили состояние равное отфильтрованному массиву
      };
    });
  };

  onImportant = (id) => {
    console.log(id);
    const imprt = this.state.todolist.filter((elem) => {
      return elem.id === id;
    });
  };

  // добавил еще один обработчик "добавление задачи" (метод который позволяет менять состояние нашего списка)
  onAdded = (message) => {
    // проверяем на предыдущее состояние
    this.setState((prev) => {
      // изменяем состояние списка задач т.к. количество задач изменится
      return {
        // в качестве значения функции возвращается актуальное состояние (состояние = актуальный массив)
        todolist: [
          ...prev.todolist, // передаем предыдущее состояние массива
          { message, important: false, done: false, id: new Date() }, // плюс добавляет новые объект с данными в массив
        ],
      };
    });
  };

  render() {
    const { todolist } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <hr />
        <InputSearch />
        <TaskFilter />
        {/* через todos передаем все пропсы, которые будут добавляться и создали обработчик onDelete (передали сгенерированное событие в виде пропса) */}
        <ToDoList
          todos={todolist}
          onDelete={this.onDelete}
          onImportant={this.onImportant}
        />
        <CreateNewElement onAdded={this.onAdded} />
        <hr />
        <Statistics />
      </div>
    );
  }
}

export default App;

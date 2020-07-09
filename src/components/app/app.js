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
  maxId = 100;
  // данные (todolist) передаем главной компоненте, как и все методы, с которыми будем работать
  state = {
    // в качестве состояние вынесен массив (структура данных) с объектами - элементами списка (у которых свойства-поля message, important, done, id)
    todolist: [
      { message: "Task 1", important: false, done: false, id: 1 }, // хранится состояние каждой Task
      { message: "Task 2", important: false, done: false, id: 2 },
      { message: "Task 3", important: false, done: false, id: 3 },
    ],
    //расширим состояние засчет нового поля (all-tasks название класса которое присваивается списку). Параметр word в функции фильтра (по умолчанию все задачи = all-tasks)
    filterWord: "all-tasks",
    keyWord: "",
  };

  // инициализируем в главной компоненте наши методы (например,onDelete или onImportant) для описания функционала, сгенерировали наше событие которое передаем потом дочерним компонентам в виде пропса
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
          { message, important: false, done: false, id: ++this.maxId }, // плюс добавляет новые объект с данными в массив
        ],
      };
    });
  };

  // метод который изменяет состояние: обращается к предыдущему состоянию и
  onToggle = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todolist.map((todo) => {
        // проверям, если значение айдишника = done, то меняем на противоположный
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      // и нужно вернуть объект-массив в котором будут записываться все изменения (данные, которые передаем)
      return {
        todolist: todos,
      };
    });
  };

  onToggle2 = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todolist.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }
        return todo;
      });
      return {
        todolist: todos,
      };
    });
  };

  // опишем событие которое будет изменять наше состояние (filterWord будет изменяться)
  filterTask = (filterWord) => {
    this.setState({ filterWord }); // обращаемся к предыдущему состояния с которым будем работать
  };

  // опишем функцию которая позволяет проверить для каждого элемента состояние, отфильтровать (два параметра: array - наш массив, word - слово по которому будем фильтровать)
  filterFunc = (array, word) => {
    // создадим новый массив (array) который уже отфильтрованный (todo - элемент который прогоняется через фильтр)
    const filtered = array.filter((todo) => {
      switch (word) {
        case "all-tasks":
          return todo;
        case "important-tasks":
          if (todo.important) return todo;
          // проверяем чтобы у элементов поле под названием "important" было "завершенное" (со значением true), тогда элемент остается в массиве, и перезаписываем массив
          else break; // если у элемента значение не true, то выходим из программы
        case "done-tasks":
          if (todo.done) return todo;
          // проверяем чтобы у элементов поле под названием "done" было "завершенное" (со значением true) и перезаписываем массив
          else break;
        default:
          throw new Error("no filter" + word);
      }
    });
    return filtered; // в конечном итоге возвращаем наш массив который пройдет через условие
  };

  searchTask = (keyWord) => {
    this.setState({ keyWord });
  };

  render() {
    const { todolist, filterWord, keyWord } = this.state;
    const doneResult = todolist.filter((todo) => todo.done).length; // константа - количество завершенных задач (отфильтровали масссив по завершенным задачам). И нам нужна его длинна
    const toDoResult = todolist.length - doneResult;
    const importantResult =
      todolist.filter((todo) => todo.important).length - doneResult;
    const todoSearch = todolist.filter((todo) => {
      if (todo.message.toLowerCase().includes(keyWord.toLowerCase()))
        return todo;
    });
    const todoFiltered = this.filterFunc(todoSearch, filterWord);

    return (
      <div className="wrapper">
        <Header />
        <hr />
        <InputSearch onSearch={this.searchTask} />
        <TaskFilter filterTask={this.filterTask} />
        {/* через todos передаем все пропсы, которые будут добавляться и создали обработчик onDelete (передали сгенерированное событие в виде пропса) */}
        <ToDoList
          todos={todoFiltered}
          onDelete={this.onDelete}
          onImportant={this.onImportant}
          onToggle={this.onToggle}
          onToggle2={this.onToggle2}
        />
        <CreateNewElement onAdded={this.onAdded} />
        <hr />
        <Statistics
          toDo={toDoResult}
          done={doneResult}
          important={importantResult}
        />
      </div>
    );
  }
}

export default App;

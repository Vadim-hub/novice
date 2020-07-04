import React from "react";
import "./app-style.scss";

import Header from "../header";
import Counter from "../counter";
import SearchInput from "../search-input";

import TodoList from "../todo-list";

// описываем функционал
function App() {
  // компонента App собирает весь контент который нужно отрендерить и будет экспортироваться (можно подключить где-то)
  return (
    // благодаря методу return описываем кусок html-разметики который возвращаем
    <div className="App">
      <Header />
      <Counter />

      <div className="container">
        <form id="books">
          <SearchInput />
        </form>
      </div>

      <div className="btn">
        <input type="submit" value="Добавить задачу"></input>
      </div>

      <TodoList />

      <div id="List">
        <ul id="List-tasks"></ul>
      </div>
    </div>
  );
}

export default App;

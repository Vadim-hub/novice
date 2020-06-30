import React from 'react';
import './styles.css';

import Header from './components/Header';
import Counter from './components/Counter';
import SearchInput from './components/SearchInput';

import TodoList from './components/TodoList';



// описываем функционал
export default function App() { // компонента App собирает весь контент который нужно отрендерить и будет экспортироваться (можно подключить где-то)
  return ( // благодаря методу return описываем кусок html-разметики который возвращаем
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
      <ul id="List-tasks">
    
      </ul>
    </div>    

    </div>
  );
}

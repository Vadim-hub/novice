import React from 'react';

import TodoItem from './TodoItem';

function TodoList(){
    return(
      <ul>
        <TodoItem name="Задача1" number=" 1"/> {/* добавили атрибуты (пропсы), данные которые потом передаются */}
        {/* <TodoItem name="Задача2" number=" 2"/>
        <TodoItem name="Задача3" number=" 3"/> */}
      </ul>
    )
  }

  export default TodoList;
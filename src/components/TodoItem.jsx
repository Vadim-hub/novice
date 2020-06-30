import React from 'react';
import TodoList from './TodoList';

function TodoItem(props){
  let arrTasks = ['Task1', 'Task2', 'Task3', 'Task4'];
  /* console.log(props); */
    return( /* подтягиваются данные из TodoList */
        arrTasks.map((item, index) =>{
        return <li key={index}>{item}</li>
    })
    )
  }

  {/* <li>{props.name + props.number}</li> */} /* js-выражения записывается в фигурных скобках */

  export default TodoItem;
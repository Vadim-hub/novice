import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App'; // подключаем компоненту App

// описываем связь между компонентой которую нужно отрисовать и где нужно отрисовать
const rootElement = document.getElementById("root");
ReactDOM.render(<App />,rootElement); // компонента <App /> будет отображаться в переменной rootElement


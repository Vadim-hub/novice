import React from "react";
import "./create-new-element.scss";

class CreateNewElement extends React.Component {
  // установим состояние state потому что нам нужно отслеживать данные которые будем вводить
  state = {
    label: "",
  };

  // обработчик который реагирует на каждое изменение состояния поля ввода (отлавливает данные)
  onChange = (e) => {
    // e - синтетический объект событие для всех браузеров
    console.log(e.target.value); // нас интересует свойство value
    this.setState({
      label: e.target.value, // перезаписываем наши данные
    });
  };
  //добавим обработчик который собирает данные которыми мы вводили и меняет состояние State поля ввода label
  onSubmit = (e) => {
    e.preventDefault(); // прописываем метод чтобы отменить стандартные действия браузера (по умолчанию происходит перезагрузка)
    this.props.onAdded(this.state.label);
    this.setState({
      label: "", // label - просто пустая строка (чтобы она очищалась)
    });
  };

  render() {
    return (
      // onSubmit обработчик на получение данных
      <form className="new-task" onSubmit={this.onSubmit}>
        <input
          type="text"
          id="new-task-input"
          placeholder="Write down a new task..."
          value={this.state.label}
          onChange={this.onChange} // обработчик который реагирует на каждое изменение вызывает на тыеэг <input> (отлавливает данные)
        />
        <button id="new-task-button">Add</button>
      </form>
    );
  }
}

export default CreateNewElement;

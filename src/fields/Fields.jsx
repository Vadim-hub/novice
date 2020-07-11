import React from "react";
import "./fields-style.css";

class Fields extends React.Component {
  // установим состояние state потому что нам нужно отслеживать данные которые будем вводить
  state = {
    username: "",
    email: "",
    password: "",
  };

  // обработчик который реагирует на каждое изменение состояния поля ввода (отлавливает данные)
  onChangeUsername = (e) => {
    // e - синтетический объект событие для всех браузеров
    console.log(e.target.value); // нас интересует свойство value
    this.setState({
      username: e.target.value, // перезаписываем наши данные
    });
  };

  onChangeEmail = (e) => {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };

  onChangePassword = (e) => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };

  //добавим обработчик который собирает данные которыми мы вводили и меняет состояние State поля ввода label
  onSubmitUsername = (e) => {
    e.preventDefault(); // прописываем метод чтобы отменить стандартные действия браузера (по умолчанию происходит перезагрузка)
    this.props.onAdded(this.state.username);
    // label - просто пустая строка (чтобы она очищалась)
    /* this.setState({
      username: "", 
    }); */
  };

  onSubmitEmail = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.email);
    /* this.setState({
      email: "",
    }); */
  };

  onSubmitPassword = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.password);
    /* this.setState({
      password: "",
    }); */
  };

  render() {
    return (
      // onSubmit обработчик на получение данных
      <form
        className="new-task"
        onSubmit={this.onSubmitUsername}
        onSubmit={this.onSubmitEmail}
        onSubmit={this.onSubmitPassword}
      >
        <input
          type="text"
          id="new-task-input"
          placeholder="Username"
          value={this.state.username}
          onChange={this.onChangeUsername} // обработчик который реагирует на каждое изменение вызывает на тэг <input> (отлавливает данные)
        />
        <input
          type="text"
          id="new-task-input"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
        <input
          type="text"
          id="new-task-input"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onChangePassword}
        />
        <button id="new-task-button">Sign up</button>
      </form>
    );
  }
}

console.log(Fields.state);

export default Fields;
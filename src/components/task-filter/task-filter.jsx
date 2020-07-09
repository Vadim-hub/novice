import React from "react";

import "./task-filter.scss";

// опишем функционал для фильтрации

// опишем объект, в котором будут хранится все наши состояния
const RESET = {
  All: "all-tasks",
  Important: "important-tasks",
  Done: "done-tasks",
};

class TaskFilter extends React.Component {
  state = { ...RESET, All: "all_tasks checked" }; // добавим наш объект с состояниями чтобы его отслеживать и опишем наши состояния через спрэд-оператор, второй параметр (состояние All) - это состояние умолчанию ("all_tasks checked")

  filterToggle = ({ target: { className } }) => {
    for (const key in RESET) {
      // через for in будем рендерить
      if (className.includes(RESET[key])) {
        const temp = RESET[key];
        this.props.filterTask(temp);
        this.setState({ ...RESET, [key]: `${temp} checked` });
      }
    }
  };

  render() {
    const btnArr = [];
    for (const key in this.state) {
      btnArr.push(<button className={this.state[key]}>{key}</button>);
    }
    return (
      <div id="filters" onClick={this.filterToggle}>
        {/* <span className="filters_item" id="all_tasks">
          All
        </span>
        <span className="filters_item" id="active_tasks">
          Active
        </span>
        <span className="filters_item" id="done_tasks">
          Done
        </span> */}
        {btnArr}
      </div>
    );
  }
}

export default TaskFilter;

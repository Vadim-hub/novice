import React from "react";
import "./task-filter.scss";

class TaskFilter extends React.Component {
  render() {
    const { todos, onDelete, onImportant, onToggle, onFilterDone } = this.props;
    /* let classNameText = "task-item"; */
    /* let classNameText = "task-text"; */

    let clickHandlerDone = () => {
      this.props.onFilterDone();
    };

    return (
      <div id="filters">
        <span className="filters_item" id="all_tasks">
          All
        </span>
        <span className="filters_item" id="active_tasks">
          Active
        </span>
        <span
          className="filters_item"
          id="done_tasks"
          onClick={() => {
            clickHandlerDone();
          }}
        >
          Done
        </span>
      </div>
    );
  }
}

export default TaskFilter;

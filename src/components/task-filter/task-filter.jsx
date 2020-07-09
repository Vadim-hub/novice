import React from "react";

import "./task-filter.scss";

class TaskFilter extends React.Component {
    render() {
        return (
            <div id='filters'>
                <span className='filters_item' id='all_tasks'>
                    All
                </span>
                <span className='filters_item' id='active_tasks'>
                    Active
                </span>
                <span className='filters_item' id='done_tasks'>
                    Done
                </span>
            </div>
        );
    }
}

export default TaskFilter;

import React from "react";
import "./statistics.scss";

const Statistics = () => {
    return (
        <div className='stat'>
            <p>
                Done: <span id='done-counter'>0</span>
            </p>
            <p>
                Important: <span id='important-counter'>0</span>
            </p>
        </div>
    );
};

export default Statistics;

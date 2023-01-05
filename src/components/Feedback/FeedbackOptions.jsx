import React from "react";

const FeedbackOptions = ({good, neutral, bad}) => (
    <div>
        <ul>
            <li><button onClick={good} type="button">Good</button></li>
            <li><button onClick={neutral} type="button">Neutral</button></li>
            <li><button onClick={bad} type="button">Bad</button></li>
        </ul>
    </div>
)

export default FeedbackOptions;
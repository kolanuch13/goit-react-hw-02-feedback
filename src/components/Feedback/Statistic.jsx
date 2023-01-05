import React from "react";

const Statistic = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <h2>Statistic</h2>
        {total === 0 ?
            <span>Thiere is no feedbacks</span>
            :
            <ul>
                <li><span>Good: {good}</span></li>
                <li><span>Neutral: {neutral}</span></li>
                <li><span>Bad: {bad}</span></li>
                <li><span>Total: {total}</span></li>
                <li><span>Positive feedback: {positivePercentage}% </span></li>
            </ul>
        }
    </div>
)

export default Statistic;
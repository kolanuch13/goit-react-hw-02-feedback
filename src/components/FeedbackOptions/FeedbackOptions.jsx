import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({good, neutral, bad}) => (
    <div>
        <ul>
            <li><button onClick={good} type="button">Good</button></li>
            <li><button onClick={neutral} type="button">Neutral</button></li>
            <li><button onClick={bad} type="button">Bad</button></li>
        </ul>
    </div>
)

FeedbackOptions.propTypes = {
    good: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    bad: PropTypes.func.isRequired,
}

export default FeedbackOptions;
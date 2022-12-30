import { Component } from "react";

class Feedback extends Component {
    constructor() {
        super(); 

        this.state= {
          good: 0,
          neutral: 0,
          bad: 0
        } 
    }

    good = () => this.setState({ good: this.state.good + 1 });
    neutral = () => this.setState({neutral: this.state.neutral + 1});
    bad = () => this.setState({ bad: this.state.bad + 1 });
    countTotalFeedback() {
        const sum = this.state.good + this.state.neutral + this.state.bad;
        return sum;
    }
    countPositiveFeedbackPercentage() {
        const sum = this.countTotalFeedback();
        const positive = (this.state.good * 100) / sum;
        if (sum === 0) {
            return 0;
        } else {
            return Math.floor(positive);
        }
    }

    render() {
        return <section>
            <h1>Please leave feedback</h1>
            <div>
                <button onClick={this.good} type="button">Good</button>
                <button onClick={this.neutral} type="button">Neutral</button>
                <button onClick={this.bad} type="button">Bad</button>
            </div>
            <div>
                <span>Good: {this.state.good}</span>
                <span>Neutral: {this.state.neutral}</span>
                <span>Bad: {this.state.bad}</span>
                <span>Total: {this.countTotalFeedback()}</span>
                <span>Positive feedback: {this.countPositiveFeedbackPercentage()}% </span>
            </div>
        </section>;
  }
}

export default Feedback;
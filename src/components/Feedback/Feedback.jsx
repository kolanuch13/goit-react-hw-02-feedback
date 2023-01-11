import { Component } from "react";
import Section from "components/Section/Section";
import Statistic from "components/Statistic/Statistic";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

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
        return <Section title="Please leave feedback">
                <FeedbackOptions
                    good={this.good}
                    neutral={this.neutral}
                    bad={this.bad}
                />
                <Statistic
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </Section>;
    }
}

export default Feedback;
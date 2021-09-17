import Section from 'components/Section';
import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleFeedback = e => {
    const type = e.target.name;
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return bad + neutral + good;
  };
  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  const options = ['bad', 'good', 'neutral'];
  return (
    <Section titel="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}

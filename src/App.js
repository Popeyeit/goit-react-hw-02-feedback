import React, { Component, useState } from 'react';
import './App.css';
import Stat from './components/Stat/Stat';
import FeedbackOpt from './components/FeedbackOpt/FeedbackOpt';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChangeState = e => {
    const nameState = e.target.textContent;
    console.log(nameState);
    switch (nameState) {
      case 'Good':
        setGood(state => state + 1);
        console.log(good);
        break;
      case 'Bad':
        setBad(state => state + 1);
        break;
      case 'Neutral':
        setNeutral(state => state + 1);

      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    const res = good + neutral + bad;
    return res;
  };
  const countPositiveFeedbackPercentage = () => {
    if (!good) {
      return 0;
    }
    return Math.round((good * 100) / countTotalFeedback().toFixed(2));
  };

  return (
    <Section>
      <FeedbackOpt handleChangeState={handleChangeState} />
      {countTotalFeedback() ? (
        <Stat
          good={good}
          neutral={neutral}
          bad={bad}
          posotiveFeedback={countPositiveFeedbackPercentage}
          countTotalFeedback={countTotalFeedback}
        />
      ) : (
        <Notification />
      )}
    </Section>
  );
};

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleChangeState = e => {
//     const nameState = e.target.textContent.toLowerCase();
//     this.setState(prev => ({
//       [nameState]: prev[nameState] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const res = good + neutral + bad;
//     return res;
//   };
//   countPositiveFeedbackPercentage = () => {
//     if (!this.state.good) {
//       return 0;
//     }
//     return Math.round(
//       (this.state.good * 100) / this.countTotalFeedback().toFixed(2),
//     );
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Section>
//         <FeedbackOpt handleChangeState={this.handleChangeState} />
//         {this.countTotalFeedback() ? (
//           <Stat
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             posotiveFeedback={this.countPositiveFeedbackPercentage}
//             countTotalFeedback={this.countTotalFeedback}
//           />
//         ) : (
//           <Notification />
//         )}
//       </Section>
//     );
//   }
// }

// export default App;

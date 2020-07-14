import React from 'react';
import PropTypes from 'prop-types';
const Stat = ({ bad, good, neutral, posotiveFeedback, countTotalFeedback }) => {
  const total = countTotalFeedback();
  return (
    <ul>
      <li>
        <p> Good:{good} </p>
      </li>
      <li>
        <p>Neutral: {neutral} </p>
      </li>
      <li>
        <p> Bad:{bad} </p>
      </li>
      <li>
        <p> Total:{total} </p>
      </li>
      <li>
        <p> Positive feedback:{posotiveFeedback()}% </p>
      </li>
    </ul>
  );
};
Stat.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  posotiveFeedback: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
};

export default Stat;

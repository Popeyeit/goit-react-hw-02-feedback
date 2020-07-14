import React from 'react';

const Section = ({ children }) => {
  console.log(children);
  const [feedback, stats] = children;
  return (
    <div>
      <h2> Please leave your feedback </h2>
      {feedback}
      <div>
        <h2> Statistics </h2>
        {stats}
      </div>
    </div>
  );
};

export default Section;

import React from 'react';
import PropTypes from 'prop-types';
const FeedbackOpt = ({ handleChangeState }) => {
  return (
    <div>
      <button type="button" onClick={handleChangeState}>
        Good
      </button>
      <button type="button" onClick={handleChangeState}>
        Neutral
      </button>
      <button type="button" onClick={handleChangeState}>
        Bad
      </button>
    </div>
  );
};
FeedbackOpt.propTypes = {
  handleChangeState: PropTypes.func.isRequired,
};

export default FeedbackOpt;

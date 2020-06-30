import React from 'react';
import PropTypes from "prop-types";

function Check1(props) {
  return (
    <React.Fragment>
      <h1>{props.questionText}</h1>
    </React.Fragment>
  )
}

Check1.propTypes = {
  questionText: PropTypes.string,
}

export default Check1;
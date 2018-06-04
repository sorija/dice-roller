import React from 'react';

const RollResult = (props) => (
  <div>
  {props.rollResult && (
    <div>
      <h2>Your result: {Number(props.rollResult) + Number(props.modValue)}</h2>
      <h4>{props.rollResult}+{props.modValue > 0 ? props.modValue : '(' + props.modValue + ')'}</h4>
    </div>
  )}
  </div>
);

export default RollResult;

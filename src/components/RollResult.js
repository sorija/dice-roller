import React from 'react';

const RollResult = (props) => (
  <div>
  {props.rollResult && (
    <div>
      <h3>{props.rollResult}+{props.modValue > 0 ? props.modValue : '(' + props.modValue + ')'}</h3>
      <h1>Your roll: {Number(props.rollResult) + Number(props.modValue)}</h1>
    </div>
  )}
  </div>
);

export default RollResult;

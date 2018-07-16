import React from 'react';

const RollResult = (props) => (
  <div className="roll-result">
  {props.rollResult && (
    <div className="roll-result__show">
      <h1 id="roll">{Number(props.rollResult) + Number(props.modValue)}</h1>
      <h3 id="calculation">{props.rollResult}+{props.modValue > 0 ? props.modValue : '(' + props.modValue + ')'}</h3>
    </div>
  )}
  </div>
);

export default RollResult;

import React from 'react';

const RollResult = (props) => (
  <div className="roll-result">
  {props.rollResult && (
    <div className="roll-result__show">
      <h1 className="num" id="roll">{Number(props.rollResult) + Number(props.modValue)}</h1>
      <h3 className="num" id="calculation">{props.rollResult}+{props.modValue > 0 ? props.modValue : '(' + props.modValue + ')'}</h3>
    </div>
  )}
  </div>
);

export default RollResult;

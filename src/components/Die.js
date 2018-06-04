import React from 'react';

const Die = (props) => (
  <div>
    {props.dieType.map(function(type,i) {
      return <button value={type} key={i} onClick={props.handleDieRoll}>D{type}</button>
    })}
  </div>
);

export default Die;

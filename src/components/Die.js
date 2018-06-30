import React from 'react';

const Die = (props) => (
  <div className="die-container">
    {props.dieType.map(function(type, i) {
      return <button className={`die d${type}`} value={type} key={i} onClick={props.handleDieRoll}>D{type}</button>
    })}
  </div>
);

export default Die;

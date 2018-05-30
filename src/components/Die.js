import React from 'react';

const Die = (props) => (
  <div>
    {props.dieType.map(function(type,i) {
      return <button value={type} key={i} onClick={props.handleDiePick}>D{type}</button>
    })}
  </div>
);

export default Die;

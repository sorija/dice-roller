import React from 'react';

const Die = (props) => (
  <div>
    <button value={props.dieType}>D{props.dieType}</button>
  </div>
);

export default Die;

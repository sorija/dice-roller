import React from 'react';

const Die = (props) => (
  <div className="dice-container">
    {props.dieFace.map(function(type, i) {
      return <button 
        className={`die d${type}`}
        value={type}
        key={i}
        onClick={props.handleDieRoll}
        >D{type}</button>
    })}
  </div>
);

export default Die;

import React from 'react';

const Modifier = (props) => (
  <div className="mod-container">
    <h3 className="mod-container__title">Modifier</h3>
    <div className="mod-container__select">
      <select value={props.modValue} onChange={props.handleModChange}>
        {props.modifiers.map(function(mod,i) {
          return <option value={mod} key={i}>{mod}</option>
        })}
      </select>
    </div>
</div>
);

export default Modifier;

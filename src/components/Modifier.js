import React from 'react';

const Modifier = (props) => (
  <div className="mod-container">
    <h3 className="mod-container__title">Modifier</h3>
      <select className="mod-container__select" value={props.modValue} onChange={props.handleModChange}>
        {props.modifiers.map(function(mod,i) {
          return <option value={mod} key={i}>{mod}</option>
        })}
      </select>
</div>
);

export default Modifier;

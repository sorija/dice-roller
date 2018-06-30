import React from 'react';

const Modifier = (props) => (
  <div>
    <h3>Modifier</h3>
    <select value={props.modValue} onChange={props.handleModChange} id="mod">
      {props.modifiers.map(function(mod,i) {
        return <option value={mod} key={i}>{mod}</option>
      })}
    </select>
</div>
);

export default Modifier;

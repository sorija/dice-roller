import React from 'react';

const Modifier = (props) => (
  <div>
    <select value={props.value} id="mod">
      {props.modifiers.map(function(mod,i) {
        return <option key={i}>{mod}</option>
      })}
    </select>
</div>
);

export default Modifier;
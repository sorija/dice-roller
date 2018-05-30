import React from 'react';
import Die from './Die';

class DiceRollerApp extends React.Component {
  state = {
    dieType: 4,
    modifiers: [0,1,2,3,4,5,6,7,8,9,10],
    result: undefined
  };
  render () {
    return (
      <div>
        <h1>They see me rollin'</h1>
        <Die dieType={this.state.dieType}/>
        <select id="mod">
          {this.state.modifiers.map(function(mod,i) {
            return <option value={i}>{mod}</option>
          })}
        </select>
      </div>
    )
  }
}

export default DiceRollerApp;

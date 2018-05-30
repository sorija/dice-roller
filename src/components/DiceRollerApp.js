import React from 'react';
import Die from './Die';

class DiceRollerApp extends React.Component {
  state = {
    dieType: [4,6,8,10,12,20],
    modifiers: [0,1,2,3,4,5,6,7,8,9,10],
    diePick: undefined,
    result: undefined
  };
  handleDiePick = (e) => {
    const value = e.target.value;
    this.setState(() => ({diePick: value}));

  };
  handleDieRoll = () => {
    const minDie = 1;
    const randomNum = Math.floor(Math.random() * (this.state.diePick - minDie + 1)) + minDie;
    this.setState(() => ({result: randomNum}));
  };
  render () {
    return (
      <div>
        <h1>They see me rollin'</h1>
        <Die dieType={this.state.dieType} handleDiePick={this.handleDiePick}/>
        <select id="mod">
          {this.state.modifiers.map(function(mod,i) {
            return <option key={i}>{mod}</option>
          })}
        </select>
        <button onClick={this.handleDieRoll}>Roll!</button>
        <h2>You rolled {this.state.result}</h2>
      </div>
    )
  }
}

export default DiceRollerApp;

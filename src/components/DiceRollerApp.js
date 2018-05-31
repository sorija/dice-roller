import React from 'react';
import Die from './Die';
import Modifier from './Modifier';

class DiceRollerApp extends React.Component {
  state = {
    dieType: [4,6,8,10,12,20],
    modifiers: [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
    value: 0,
    diePick: undefined,
    result: undefined
  };
  handleDiePick = (e) => {
    const value = e.target.value;
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
        <Modifier modifiers={this.state.modifiers} value={this.state.value}/>
        <h3>Selected: {this.state.dieCount}D{this.state.diePick}</h3>
        <button onClick={this.handleDieRoll}>Roll!</button>
        <h2>You rolled {this.state.result}</h2>
      </div>
    )
  }
}

export default DiceRollerApp;

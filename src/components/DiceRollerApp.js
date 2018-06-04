import React from 'react';
import Die from './Die';
import Modifier from './Modifier';
import RollResult from './RollResult';

class DiceRollerApp extends React.Component {
  state = {
    dieType: [4,6,8,10,12,20],
    modifiers: [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
    modValue: 0,
    diePick: undefined,
    rollResult: undefined,
  };
  handleDiePick = (e) => {
    const value = e.target.value;
    this.setState(() => ({diePick: value}));
  };
  handleModChange = (e) => {
    const modValue = e.target.value;
    this.setState(() => ({modValue: modValue}));
  };
  handleDieRoll = () => {
    const minDie = 1;
    const randomNum = Math.floor(Math.random() * (this.state.diePick - minDie + 1)) + minDie;
    this.setState(() => ({rollResult: randomNum}));
  };
  render () {
    return (
      <main>
        <h1>They see me rollin'</h1>
        <Die dieType={this.state.dieType} handleDiePick={this.handleDiePick}/>
        <Modifier modifiers={this.state.modifiers} modValue={this.state.modValue} handleModChange={this.handleModChange}/>
        <h3>Selected:{this.state.diePick ? 'd' + this.state.diePick : ''}</h3>
        <button onClick={this.handleDieRoll}>Roll!</button>
        <RollResult rollResult={this.state.rollResult} modValue={this.state.modValue}/>
      </main>
    )
  }
}

export default DiceRollerApp;

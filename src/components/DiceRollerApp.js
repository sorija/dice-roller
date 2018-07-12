import React from 'react';
import Die from './Die';
import Modifier from './Modifier';
import RollResult from './RollResult';

class DiceRollerApp extends React.Component {
  state = {
    dieType: [4,6,8,10,12,20,100],
    modifiers: [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
    modValue: 0,
    diePick: undefined,
    rollResult: undefined,
  };
  handleModChange = (e) => {
    const modValue = e.target.value;
    this.setState(() => ({modValue: modValue}));
  };
  handleDieRoll = (e) => {
    const minDie = 1;
    const value = e.target.value;
    const randomNum = Math.floor(Math.random() * (value - minDie + 1)) + minDie;
    this.setState(() => ({
      diePick: value,
      rollResult: randomNum
    }));
  };
  render () {
    return (
      <main className="page-container">
        <header className="header">
          <h1 className="title">D&Dice</h1>
        </header>
        <div className="content-container">
          <Die dieType={this.state.dieType} handleDieRoll={this.handleDieRoll}/>
          <Modifier modifiers={this.state.modifiers} modValue={this.state.modValue} handleModChange={this.handleModChange}/>
          <div className="selection">
            <h3 className="selection__head">Selected:</h3>
            <p className="selection__die">{this.state.diePick ? ' d' + this.state.diePick : ''}</p>
          </div>
          <RollResult rollResult={this.state.rollResult} modValue={this.state.modValue}/>
        </div>
      </main>
    )
  }
}

export default DiceRollerApp;

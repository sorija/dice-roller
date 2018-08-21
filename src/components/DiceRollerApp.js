import React from 'react';
import Die from './Die';
import Modifier from './Modifier';
import RollResult from './RollResult';

class DiceRollerApp extends React.Component {
  state = {
    dieType: [4,6,8,10,12,20,100],
    modifiers: [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
    modValue: 0,
    randomNumbers: null,
    rollResult: undefined,
    diePick: undefined,
    error: undefined
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
  componentDidMount = () => {
    // generate pool of 250 random numbers
    const generateRolls = () => {
      return new Promise((resolve, reject) => {
        let rolls = [];
        while(rolls.length < 250) {
          const randomRoll = Math.floor(Math.random() * 600);
          rolls[rolls.length] = randomRoll;
        }
        resolve(rolls);
        console.log("rolls after resolve", rolls);
      });
    }
    generateRolls().then(rolls => {this.setState({randomNumbers: rolls})});
  }
  render () {
    return (
      <main className="page-container">
        <header className="header">
          <h1 className="title">D&Dice</h1>
        </header>
        <div className="content-container">
          <Die
            dieType={this.state.dieType}
            handleDieRoll={this.handleDieRoll}
          />
          <Modifier
            modifiers={this.state.modifiers}
            modValue={this.state.modValue}
            handleModChange={this.handleModChange}
          />
          <RollResult
            rollResult={this.state.rollResult}
            modValue={this.state.modValue}
            diePick={this.state.diePick}
          />
        </div>
      </main>
    )
  }
}

export default DiceRollerApp;

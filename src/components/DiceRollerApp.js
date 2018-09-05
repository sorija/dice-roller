import React from 'react';
import Die from './Die';
import Modifier from './Modifier';
import RollResult from './RollResult';

class DiceRollerApp extends React.Component {
  state = {
    dieFace: [4,6,8,10,12,20,100],
    modifiers: [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
    modValue: 0,
    rollCounter: 0,
    randomNumbers: undefined,
    rollResult: undefined,
    diePick: undefined,
    error: undefined
  };
  fetchData = async () => {
    try {
      // RANDOM API (https://api.random.org/json-rpc/1/introduction)
      // size of the range for min/max is the least common multiple of all dice (offset for correct modulo results)
      // finding lcm by prime factorization: lcm(4,6,8,10,12,20,100) = 2^3 x 3 x 5^2 = 600
      const API_KEY = process.env.BETA_RANDOM_API_KEY;
      const response = await fetch("https://api.random.org/json-rpc/1/invoke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json-rpc"
        },
        body: JSON.stringify({
          "jsonrpc": "2.0",
          "method": "generateIntegers",
          "params": {
            "apiKey": API_KEY,
            "n": 250,
            "min": 0,
            "max": 599
          },
          "id": 42
        })
      });
      if (response.status != 200) {
        throw "API did not cooperate";
      }
      const { result: { random: {data} } } = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      console.log("It's fine. Already initialized backup numbers generator.");
      // generate pool of 250 random numbers
      let numbers = [];
      while(numbers.length < 250) {
        const randomNum = Math.floor(Math.random() * 600);
        numbers[numbers.length] = randomNum;
      }
      return numbers;
    }
  };
  handleModChange = (e) => {
    const modValue = e.target.value;
    this.setState(() => ({modValue: modValue}));
  };
  handleDieRoll = async (e) => {
    const diePick = e.target.value;
    let numArray = this.state.randomNumbers;
    let counter = this.state.rollCounter;
    let randomNum = numArray[counter++];
    if (counter < numArray.length) {
      this.setState({rollCounter: counter});
    } else {
      counter = 0;
      numArray = await this.fetchData();
      this.setState({
        rollCounter: 0,
        randomNumbers: numArray
      });
    };
    const roll = (randomNum % diePick) + 1;
    this.setState({
      diePick: diePick,
      rollResult: roll
    });
  };
  async componentDidMount() {
    const randomNumbersArray = await this.fetchData();
    this.setState({randomNumbers: randomNumbersArray});
  }
  render () {
    return (
      <main className="page-container">
        <header className="header">
          <h1 className="title">D&Dice</h1>
        </header>
        <div className="content-container">
          <Die
            dieFace={this.state.dieFace}
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

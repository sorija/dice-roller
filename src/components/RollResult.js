import React from 'react';

const RollResult = (props) => {
  const modValue = props.modValue;
  const result = props.rollResult;
  const diePick = props.diePick;
  const data = {
    1: {
      className: "roll crit-failure",
      rollValue: result,
      calc: {
        className: "calc crit-failure",
        innerHTML: "Critical Failure!"
      }
    },
    20: {
      className: "roll crit-success",
      rollValue: result,
      calc: {
        className: "calc crit-success",
        innerHTML: "Critical Success!"
      }
    },
    default: {
      className: "roll",
      rollValue: result + modValue,
      calc: {
        className: "calc",
        innerHTML: '' + result + (modValue >= 0 ? '+' + modValue : modValue)
      }
    }
  };
  // display adequate message for natural 1 and natural 20 roll on d20
  const rollData = data[diePick === "20" && (result === 1 || result === 20) ? `${result}` : "default"];
  return (
    <div className="roll-result">
      {props.rollResult && (
        <div className="roll-result__show num">
          <h1 className={rollData.className}>
            {rollData.rollValue}
          </h1>
          <h3 className={rollData.calc.className}>
            {rollData.calc.innerHTML}
          </h3>
        </div>
      )}
    </div>
  )
}

export default RollResult;

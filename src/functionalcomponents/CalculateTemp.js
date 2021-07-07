import React, { useState } from "react";
/* lifting state up means updating the state in the parent component so that two values are always in sync*/
const CalculateTemp = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  var insertinCelsius = (e) => {
    setCelsius(e.target.value);
    setFahrenheit((9 / 5) * e.target.value + 32);
  };

  var insertInFahrenheit = (e) => {
    console.log(e.target.value);
    setCelsius(((e.target.value - 32) * 5) / 9);
    setFahrenheit(e.target.value);
  };

  return (
    <React.Fragment>
      <div>
        <div>
          <label>In Celsius</label>
          <input
            type="number"
            value={celsius}
            onChange={insertinCelsius}
          ></input>
        </div>
        <div>
          <label>In Fahrenheit</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={insertInFahrenheit}
          ></input>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalculateTemp;

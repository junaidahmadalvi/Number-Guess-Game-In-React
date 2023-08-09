import React, { useState } from "react";

import "./index.css";

const NumberGuessGame = () => {
  const [number, changeNumber] = useState("");
  const [targetNumber] = useState(Math.floor(Math.random() * 10 + 1));
  const [msg, changeMsg] = useState("");

  const getResult = () => {
    // changeTarget(3);
    if (parseInt(number) === targetNumber) {
      console.log(parseInt(number), "number");
      console.log(targetNumber, "targetNumber");
      changeMsg("Congratulations! You guess correct number");
    } else {
      console.log(parseInt(number), "number");
      console.log(targetNumber, "targetNumber");
      changeMsg("Oops! You guess wrong number plz try again");
      //   number = "";
      //   changeTarget();
    }
  };

  return (
    <div>
      <center>
        <h1>Number Guess Game</h1>
      </center>
      <label htmlFor="number">Enter a Number between 1 to 11:</label>
      <input
        type="number"
        name=""
        value={number}
        onChange={(e) => {
          changeNumber(e.target.value);
          console.log(e.target.value, "entered number");
        }}
      />
      <div>
        <center>
          <button type="submit" onClick={getResult}>
            Check result
          </button>
        </center>
      </div>
      <h3>{msg}</h3>
    </div>
  );
};

export default NumberGuessGame;

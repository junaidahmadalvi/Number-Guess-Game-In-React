// import React, { useState } from "react";
import "./App.css";
// import { Welcome } from "./welcome";
import NumberGuessGame from "./numberGuessGame";

function App() {
  // // Initialize name state with an empty string
  // const [name, changeName] = useState("");

  // const changeHandler = (e) => {
  //   // Use e.target.value to get the input value
  //   const newName = document.getElementById("userName").value;
  //   console.log(newName, "newName");
  //   changeName(newName);
  // };

  return (
    <>
      <NumberGuessGame />
      {/* <center>
        <h1>States</h1>
      </center>

      <input
        type="text"
        value={name} // Bind the input value to the state variable
        id="userName"
        onChange={changeHandler} // Use onChange to track input changes
      />
      <button type="button" onClick={changeHandler}>
        submit
      </button>
      <Welcome firstName={"Junaid"} lastName={"Ahmad"} />
      <Welcome firstName={"Hasaan"} lastName={"Ahmad"} />
      <Welcome firstName={name} />
      <p>end</p> */}
    </>
  );
}

export default App;

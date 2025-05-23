import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // Function to increment counter only if it's less than 30
  const addValue = () => {
    if (counter < 30) {
      setCounter(counter + 1);
    } else {
      alert("Counter can not go above 30 !");
    }
  };

  // Function to decrement counter only if it's more than 0
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter can not go below 0 !");
    }
  };

  // Function to reset the counter back to 15
  const resetValue = () => {
    setCounter(15);
  };

  return (
    <>
      <h1>React Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <br />
      <br />
      <button onClick={resetValue}>Reset Value</button>
    </>
  );
}

export default App;

import React, { useState } from "react";

import "./App.css";

import Button from "./components/Button/index";
import State from "./components/State";

function App() {
  const [count, setCount] = useState(5);

  const onChangeCount = () => {
    setCount(count + 5);
  };

  return (
    <>
      <h1>đếm {count}</h1>

      <button onClick={onChangeCount}> tang</button>

      <Button />
      <State />
    </>
  );
}

export default App;

import React from "react";
import { useState } from "react";

function App() {
const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    
    function handleClick() {
        setCount((c) => c + 1);
        setFlag((f) => !f);
    }

    return (
      <div>
        <button onClick={handleClick}>Next</button>
        <h1 style={{ color: flag ? "green" : "red" }}>{count}</h1>
      </div>
    );
  }

export default App;
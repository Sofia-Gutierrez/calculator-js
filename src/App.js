import "./assets/css/App.css";
import React, { useState } from "react";
import { evaluate } from "mathjs";
import FreeCodeCampLogo from "./components/FreeCodeCampLogo";
import Display from "./components/Display";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";

function App() {

  const [input, setInput] = useState("");
  const [limit, setLimit] = useState(null);

  const addInput = value => {
    setInput(input + value);
    if(input.length > 12) {
      maxDigitWarning()
    }
  };

  const maxDigitWarning = () => {
    setLimit("Digit limit met");
    setTimeout(() => setInput(input), 100);
    setTimeout(() => setLimit(null), 1000);
  };

  const calculateResult = () => {
    if(input) {
      setInput(evaluate(input));
    };
  };

  return (
    <div className="App">
      <FreeCodeCampLogo />
      <div className="container-calculator">
        <Display input={input} limit={limit} id="display"/>
        <div className="row">
          <Button handleClick={addInput} id="one">1</Button>
          <Button handleClick={addInput} id="two">2</Button>
          <Button handleClick={addInput} id="three">3</Button>
          <Button handleClick={addInput} id="add">+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput} id="four">4</Button>
          <Button handleClick={addInput} id="five">5</Button>
          <Button handleClick={addInput} id="six">6</Button>
          <Button handleClick={addInput} id="subtract">-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput} id="seven">7</Button>
          <Button handleClick={addInput} id="eight">8</Button>
          <Button handleClick={addInput} id="nine">9</Button>
          <Button handleClick={addInput} id="multiply">*</Button>
        </div>
        <div className="row">
          <Button handleClick={() => calculateResult()} id="equals">=</Button>
          <Button handleClick={addInput} id="zero">0</Button>
          <Button handleClick={addInput} id="decimal">.</Button>
          <Button handleClick={addInput} id="divide">/</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")} id="clear">Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons"
import Cbc from "./components/Cbc"


function App() {
  return (
    <div className="app">
      <Title />
      <Counter />
      <Buttons />
      <Cbc />
    </div>
  );
}

export default App;

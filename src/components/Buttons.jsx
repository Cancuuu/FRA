import React, { useState } from "react";

import "./Buttons.css";

function Buttons() {
  const [count, setCount] = useState(0);

  return (
    <div className="btns">
      <div className="number">
        <p>{count}</p>
      </div>
      <div className="center">
        <button id="btnminus" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button id="btnreset" onClick={() => setCount(0)}>
          RESET
        </button>
        <button id="btnplus" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Buttons;

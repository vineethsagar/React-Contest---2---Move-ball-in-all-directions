import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const handleStart = () => {
    //console.log("handle start");
    let newBall = true;
    setRenderBall(newBall);
  };

  const handleBallPosition = (event) => {
    console.log(event.code);
    if (event.keyCode === 37) {
      // left - change only x
      const leftTemp = x - 5;
      setX(leftTemp);
      setBallPosition({ left: `${leftTemp}px`, right: `${y}px` });
    } else if (event.keyCode === 39) {
      //right - change only x
      const rightTemp = x + 5;
      setX(rightTemp);
      setBallPosition({ left: `${rightTemp}px`, right: `${y}px` });
    } else if (event.keyCode === 38) {
      // top - change only y
      const topTemp = y - 5;
      setY(topTemp);
      setBallPosition({ left: `${x}px`, right: `${topTemp}px` });
    } else if (event.keyCode === 40) {
      //down - change only y

      const downTemp = y + 5;
      setBallPosition({ left: `${x}px`, right: `${downTemp}px` });
      setY(downTemp);
    }
  };

  const reset = () => {
    let resetX = 0;
    let resetY = 0;
    let resetBall = false;
    let resetLeft = 0;
    let resetRight = 0;

    setX(resetX);
    setY(resetY);
    setRenderBall(resetBall);
    setBallPosition({ left: resetLeft, right: resetRight });
  };
  const renderChoice = () => {
    document.addEventListener("keydown", (event) => handleBallPosition(event));
  };
  return (
    <div className="playground">
      {!renderBall && (
        <button onClick={handleStart} className="start">
          Start
        </button>
      )}

      {renderBall && (
        <div
          className="ball"
          style={{ left: ballPosition.left, top: ballPosition.right }}
        ></div>
      )}

      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;

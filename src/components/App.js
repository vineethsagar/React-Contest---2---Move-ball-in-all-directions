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
    console.log("handle start");
    setRenderBall(true);
    renderChoice();
  };

  const handleBallPosition = (event) => {
    console.log(event);
    if (event.keyCode === 37) {
      // left - change only x
      const leftTemp = x + 5;
      setX(leftTemp);
    } else if (event.keyCode === 39) {
      //right - change only x
      const rightTemp = x - 5;
      setX(rightTemp);
    } else if (event.keyCode === 38) {
      // top - change only y
      const topTemp = y + 5;
      setY(topTemp);
    } else if (event.keyCode === 40) {
      //down - change only y
      const downTemp = y - 5;
      setY(downTemp);
    }

    setBallPosition({
      left: x + "px",
      top: y + "px"
    });
  };
  document.addEventListener("keydown", handleBallPosition);
  const reset = () => {
    setRenderBall(false);
    renderChoice();
  };
  const renderChoice = () => {
    if (renderBall === false) {
      console.log("render button");
      return (
        <button className="start" onClick={handleStart}>
          start
        </button>
      );
    } else {
      console.log("render ball");

      return <div className="ball"></div>;
    }
  };

  return (
    <div className="playground">
      {renderChoice()}
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default App;

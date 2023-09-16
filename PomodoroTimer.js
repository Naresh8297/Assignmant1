
import React, { useState } from 'react';

function PomodoroTimer() {
  const [timer, setTimer] = useState(25 * 60); 
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimer(25 * 60);
  };

  return (
    <div>
      <div>{timer} seconds remaining</div>
      {isRunning ? (
        <button onClick={pauseTimer}>Pause</button>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default PomodoroTimer;

import React, { useState } from 'react';
import './App.css'; 

function CounterApp() {

  const [count, setCount] = useState(0);

  const handleIncrement = function() {
    setCount(count + 1);
  };

  const handleDecrement = function() {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = function() {
    setCount(0);
  };

  return (
    
    <div className="container">
      <div className="counter-card">
        <h1 className="title">COUNTER</h1>
        
        <div className="count-display">{count}</div>

        <div className="button-group">
          <button className="btn increment" onClick={handleIncrement}>Increment</button>
          <button className="btn decrement" onClick={handleDecrement}>Decrement</button>
          <button className="btn reset" onClick={handleReset}>Reset</button>
        </div>

        {count === 0 && (
          <p className="message-warning">Minimum limit reached</p>
        )}

      </div>
    </div>
  );
}

export default CounterApp;
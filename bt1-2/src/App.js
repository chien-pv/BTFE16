import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClickerHeader></ClickerHeader>
      <ClickMain></ClickMain>
    </div>
  );
}

const ClickerHeader = () => {
  return(
    <img src="  /ReactClicker.png" />
  )
}

const ClickMain = () => {
  const [count, setCount] = useState(0);
  return(
    <div className="clicker__main">
      <h1>{count}</h1>
      <div>
        <button className="plus"  onClick = { () => setCount(count+1) }>+</button>
        <button className="reset" onClick = { () => setCount(count - count) }><img src="/reset.png" /></button>
        <button className="minus" onClick = { ()=> setCount(count-1) }>-</button>
      </div>  
    </div>
  )
}

export default App;

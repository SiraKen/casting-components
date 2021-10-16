import { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>{ count }</h1>
      <button onClick={(e) => { setCount(count + 1) }}>Count Up</button>
      <button onClick={(e) => { setCount(count - 1) }}>Count Down</button>
    </div>
  );
}

export default App;

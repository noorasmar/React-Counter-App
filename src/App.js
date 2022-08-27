import { useState } from 'react';
import './App.css';
import Button from './components/Button';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='num'>
        {count}
      </div>
      <div className='op'>
        <Button operation="add" count={count} setCount={setCount}/>
        <Button operation="sub" count={count} setCount={setCount}/>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import Header from './components/Header';
import Button from './components/Button';

function App() {
  let [number, setNumber] = useState(0);

  function addNumber() {
    setNumber(number + 1);
  }
  function decNumber() {
    setNumber(number - 1);
  }
  function resetNumber() {
    setNumber(0);
  }

  return (
    <>
      <Header />
      <div>
        <Button text={'-'} onClick={decNumber} counter={number} />
        <span style={{ margin: 20 }}>{(number > 9 || number < 0) ? "done!" : number}</span>
        <Button text={'+'} onClick={addNumber} counter={number} />
        <Button text={'Reset!'} onClick={resetNumber} counter={number} />
      </div>
    </>
  )
}

export default App

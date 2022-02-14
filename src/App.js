
import {useState, useEffect} from 'react';
import Coffees from './Coffees';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState({ name: 'Jeremiah', age: 31, shirt: 'tan' });
  useEffect(()=>{
    setCounter(500)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
       <h1>Counter: {counter}</h1>
       <h2>Hello {person.name}</h2>
       <button
       onClick={() => setCounter(counter -1)}> - </button>
       &nbsp; 
       <button onClick={() => setCounter(counter +1)}> + </button>
       &nbsp; 
       <button onClick={() => setCounter(0)}> RESET </button>
       <Coffees />
      
      </header>
    </div>
  );
}

export default App;

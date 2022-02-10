import {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [cars, setCars] = useState(['Audi', 'Tesla', 'Ford']);
  const [person, setPerson] = useState({ name: 'Jeremiah', age: 31, shirt: 'tan' });
  return (
    <div className="App">
      <header className="App-header">
       <h1>Counter: {counter}</h1>
       <h2>Hello {person.name}</h2>
       <h2>{cars.toString()}</h2>
       <button onClick={() => setCars([...cars, 'Kia'])}>Add Kia</button>&nbsp;
       <button
       onClick={() => setCounter(counter -1)}> - </button>
       &nbsp; 
       <button onClick={() => setCounter(counter +1)}> + </button>
       &nbsp; 
       <button onClick={() => setCounter(0)}> RESET </button>
      
      </header>
    </div>
  );
}

export default App;

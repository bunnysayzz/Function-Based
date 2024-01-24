import React from 'react';
import Counter from './components/Counter';
import { CounterContext } from './provider/UserProvider';

export default function App() {
  const counterState = React.useContext(CounterContext);

  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

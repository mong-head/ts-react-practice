import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greeting';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says HELLO`);
  }
  return <Greetings name="mong" onClick={onClick}/>;
}

export default App;

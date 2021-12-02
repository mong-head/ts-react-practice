import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greeting';
import CounterState from './CounterState';
import MyForm from './MyForm';
import CounterReducer from './CounterReducer';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  // greeting용
  const onClick = (name: string) => {
    console.log(`${name} says HELLO`);
  }

  // myform용
  const onSubmit = (form: {name: string, description: string }) => {
    console.log(form);
  }


  const greetingsComponent = <Greetings name="mong" onClick={onClick}/>;
  const counterStateComponent = <CounterState />;
  const myFormComponent = <MyForm onSubmit={onSubmit} />
  const counterReducerComponent = <CounterReducer />;
  const reducerSample = <ReducerSample />; 
  return reducerSample;
}

export default App;

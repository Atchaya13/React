import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './Components/Calc';
import './CalculatorStyle.scss'
import ReaclCalc from './Components/CalcWithUseState';
import NewCalc from './Components/CalcWithUseReducer';

function App() {
  return (
    <div className='container'>
         <h1  className="heading" id="head-ing">CALCULATOR</h1>
         {/* <Calc /> */}
         <NewCalc></NewCalc>
    </div>
);
}

export default App;

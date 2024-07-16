import React, { createContext } from 'react';
import './App.css';
import ComA from './ComA';
import Num from './Num';
import State from './Component/StateWiseData/State';
import StateWise from './Component/StateWiseData/StateWise';
import ComX from "./Component/StateWiseData/Compiler/ComX"

const FirstName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={'Vinodi'}>
        <ComA />
        <Num />
        <State />
        <StateWise />
        <br />
        <ComX/>
      </FirstName.Provider>
    </>
  );
};
export default App;
export { FirstName };

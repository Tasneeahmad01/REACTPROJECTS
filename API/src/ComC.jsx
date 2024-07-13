import React from 'react'
import { FirstName } from './App';
const ComC = () =>{
  return (
    <div>
        <FirstName.Consumer>{(fname)=>{
            return<h1>My name is {fname}</h1>
        }}</FirstName.Consumer>
        
    </div>
  );
}

export default ComC;

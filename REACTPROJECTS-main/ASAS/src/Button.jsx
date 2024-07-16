
import React from 'react'

function Button() {
  return (
    <div>
        <h1>Ludo Game</h1>
        <div className="ludo">
            <p>Blue Moves = </p>
            <button  style={{backgroundColor:"blue"}}>+1</button>
            <p>yellow Moves = </p>
            <button style={{backgroundColor:"yellow"}}>+2</button>
            <p>green Moves = </p>
            <button style={{backgroundColor:"green"}}>+3</button>
            <p>red Moves = </p>
            <button style={{backgroundColor:"red"}}>+4</button>
        </div>
    </div>
  )
}

export default Button
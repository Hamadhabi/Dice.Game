import React from 'react'
import './Game.css';
export default function Game({toggle}) {
  return (
    <div>
         <img src="./images/dice/Ludo.png" alt="dics.1" />
   <h1>DICS GAME</h1>
   <button onClick={toggle}>play now</button>
    </div>
  )
}

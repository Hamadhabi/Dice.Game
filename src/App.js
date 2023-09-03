import React from 'react'
import './App.css';
import Game from './Components/Game';
import Play from './Play';
import  { useState } from 'react';


export default function () {
  const [isplay,setisPlay]= useState(false);
  const toggleform = () =>{
    setisPlay((prev)=> !prev);
  }
  return (
    <div>
      { isplay ? <Play/> : <Game toggle={toggleform}/>}

    </div>
  )
}


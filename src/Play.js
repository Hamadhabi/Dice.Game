import React from 'react'
import Scrore from './Components/Scrore'
import Number from './Components/Number'
import DicSelecter from './Components/DicSelecter'
import{ useState } from 'react';
import styled from 'styled-components'
import Rules from './Components/Rules';

export default function Play() {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentdice, setCurrentdice] = useState(1);
  const [error, setError] = useState("");

  const role = () => {
    if(!selectNumber){
setError("You have not selected any number")

      return
    }
  
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentdice((prev) => randomNumber);
    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
setSelectNumber(undefined)

  } 
 
const generateRandomNumber = (min, max) => {
return Math.floor(Math.random() * (max - min) + min);
};
const resetNumber= () =>{
  setScore(0)
}


  return (
   
<Container>

<Scrore score={score}/>
<Number selectNumber={ selectNumber}
setSelectNumber={setSelectNumber} error={error} setError={setError}/>

<DicSelecter currentdice={currentdice} role={role}/>
<div className="Button">
<button className='btn-1' onClick={resetNumber}>Reset Now</button>

</div>
</Container>
     
 
  )
}

const Container = styled.div`
.Button{
  margin-top: -20px;
}
.btn-1 {
background-color:white;
color:black;
margin-left:44%;
cursor: pointer;
margin-top:12px;
border-radius: 4px;
},
.btn-1:hover {
background-color:black;
color:white;

}

`
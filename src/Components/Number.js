import React from 'react'
import styled from 'styled-components';

export default function Number({ setError,error,selectNumber, setSelectNumber}) {
  const  handelError = (value) =>{
    setSelectNumber(value)
    setError("")
  }

    const arryNumber =[1,2,3,4,5,6]
  return (
    <Container>
      <p className='error'>{error}</p>
    <div className='flex'>
     
     {arryNumber.map((value,i) =>(
     <Box key={i} onClick={ ()=>handelError(value)} Selected={value==selectNumber}>
        {value}
        </Box>
        ))}
   

    </div>
  <p>Select Number</p>
    </Container>
  
  )
}
const Container = styled.div`

p{
  font-size: 24px;
  font-weight:700;
 margin-left:56%;
 margin-top:-1px;

}
.error{
  color:red;
font-weight:400;
margin-left:36%;
padding:18px;



}
.flex{
  display: flex;
margin-left:30%;
margin-top:-160px;
gap:12px;
}
`;
const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 2px solid black;
  display: grid;
  place-items:center;
  font-size: 24px;
  font-weight: 700;
  cursor:pointer;
  background: ${(props)=>(props.Selected  ? "black":"white")};
 color: ${(props)=>(props.Selected  ? "white":"black")};
`;

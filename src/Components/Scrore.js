import React from 'react'
import styled from 'styled-components';


export default function Scrore({score}) {
  return (
    < Styledcontainer>
       <h2>{score}</h2>
        <p>Totale Scrore</p>

        
    </ Styledcontainer>

  )
}
const Styledcontainer = styled.div`
max-width:180px;
text-align: center;
  h2{
font-size:4.5rem;
line-height:3.5rem;
  }
  p{
    font-weight: 600;
font-size:20px;
margin-top:-40px;

  }
`;


import React from 'react'
import styled from 'styled-components'



export default function DicSelecter({currentdice, role}) {
    
    



  return (
    <Content onClick={role}>
          <img src={`/images/dice/dics.${currentdice}.png`} alt="Error" />
          <p>Click on Dice</p>
         
    </Content>
  )
}
const Content = styled.div`
img{
    cursor: pointer;
    width: 150px;
    height: 150px;
    margin-left:44%;
    margin-top:30px;
    display:flex;
}
p{
  margin-top:2px;
    margin-left:44%;
font-size:24px;
font-weight: 500;
}



`
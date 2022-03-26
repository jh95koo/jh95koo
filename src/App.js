import React from "react";
import styled from "styled-components";
import './App.css'

import AnimationBox from "./components/animation-box";

const FlexContainer = styled.div`
  display: flex;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
`

const App = () => {
  const handleClick = (e) => {
    // e.target.style.animationPlayState = 'paused'

    let state = e.target.style.animationPlayState;
    if(state === 'paused') {
      e.target.style.animationPlayState = ''
    } else {
      e.target.style.animationPlayState = 'paused'
    }
  }

  return (
    <FlexContainer>
      {(new Array(100).fill(0)).map((item, index) => 
        <AnimationBox onClick={handleClick} key={index}>{index + 1}</AnimationBox>
      )}

    </FlexContainer>
  )
}

export default App;
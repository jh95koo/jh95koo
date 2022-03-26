import React from "react";
import styled from "styled-components";
import Windmill from "./components/windmill";


const Container = styled.div`
  margin-top: 250px;
  /* display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px; */
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
    <Container>
      <Windmill/>
    </Container>
  )
}

export default App;
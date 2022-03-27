import React from "react";
import { default as WindmillComp } from '../components/Windmill'
import styled from "styled-components";


const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Windmill = () => {

  return (
    <Container>
      <WindmillComp/>
    </Container>
  )
}

export default Windmill;
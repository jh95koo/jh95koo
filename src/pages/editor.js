import React from "react";
import {default as EditorComp} from "../components/Editor";
import styled from 'styled-components'


const Container = styled.div `
  height: 99%;
`

const Editor = () => {

  return (
    <Container>
      <EditorComp/>
    </Container>
  )
}

export default Editor;
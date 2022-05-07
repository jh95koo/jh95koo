import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Editor, Windmill, Roller } from './pages';
import TabNav from "./pages/TabNav";

import Nav from "./components/Nav";

const Container = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const NavBox = styled.div `
  z-index: 100;
  margin-bottom: 10px;
`
const Content = styled.div `
  flex: 1;
  padding-left:  14px;
  padding-right: 14px;
`

const App = () => {
  // const history = useHistory();

  return (
    <BrowserRouter>
      <Container>
        <NavBox>
          <Nav/>
        </NavBox>
        <Content>
          <Routes>
            <Route exact path="/"         element={<Main/>}/>
            <Route exact path="/editor"   element={<Editor/>}/>
            <Route exact path="/editor"   element={<Editor/>}/>
            <Route exact path="/windmill" element={<Windmill/>}/>
            <Route exact path="/roller"   element={<Roller/>}/>
            <Route exact path="/tab-nav"  element={<TabNav/>}/>
            <Route path="*" element={<h3>404</h3>}/>
          </Routes>
        </Content>
      </Container>
    </BrowserRouter>
  )
}

export default App;
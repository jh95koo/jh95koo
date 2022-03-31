
import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import MenuImage from "./MenuImage";
import LeftMenu from "./LeftMenu";

const TopBar = styled.div`
  height : 52px;
  background-color: #3E0286;
  display: flex;
  align-items: center;
  padding-left: 10px;
`
const TitleText = styled.div `
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 12px;
`


const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open)
    if(open) {

    } else {

    }
  }, [open])

  return (
    <TopBar>
      <LeftMenu open={open} setOpen={setOpen}/>
      <MenuImage onClick={()=>{setOpen(true)}}/>
      <TitleText>Hollo world</TitleText>
    </TopBar>
  );
}






export default Nav;
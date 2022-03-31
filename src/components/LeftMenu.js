import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

const BackgroundBox = styled.div `
  position: fixed;
  visibility: hidden;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: #111c;
  transition-duration: 0.5s;
  z-index: 99999;
`

const Box = styled.div `
  background-color: #eee;
  position: fixed;
  top: 0px;
  left: -300px;
  height: 100%;
  width: ${300-8}px;

  padding: 4px;

  display: flex;
  flex-direction: column;
  transition-duration: 0.5s;
`

const MenuButton = styled.button `
  height: 48px;
  width: 100%;
  text-align: left;
  border: 0px none;
  border-bottom: 2px solid #ccc;
  background-color: transparent;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition-duration: 0.2s;
  :active {
    background-color: #ccc;
  }
`


const LeftMenu = (props) => {
  let refBox = useRef(null);
  let refBackgroundBox = useRef(null);

  useEffect(() => {
    if(props.open) {
      refBox.current.style.left = '0px';
      refBackgroundBox.current.style.visibility = 'visible';
      refBackgroundBox.current.style.backgroundColor = '#111c';
    } else {
      refBox.current.style.left = '-300px';
      refBackgroundBox.current.style.visibility = 'hidden';
      refBackgroundBox.current.style.backgroundColor = 'transparent';
    }
    
  }, [props.open])

  return (
    <BackgroundBox ref={refBackgroundBox} onClick={() => {props.setOpen(false)}}>
      <Box ref={refBox}>
        <Link to="/">
          <MenuButton>main</MenuButton>
        </Link>
        <Link to="/editor">
          <MenuButton>editor</MenuButton>
        </Link>
        <Link to="/roller">
          <MenuButton>roller</MenuButton>
        </Link>
        <Link to="/windmill">
          <MenuButton>windmill</MenuButton>
        </Link>
      </Box>
    </BackgroundBox>
  )
}


export default LeftMenu;
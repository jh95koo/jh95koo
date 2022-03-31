import styled from "styled-components"

const BackgroundBox = styled.button `
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  border: 0px none;
  margin: 0px;
  padding: 8px;
  cursor: pointer;
  transition-duration: 0.2s;

  :active {
    background-color: #fff9;
  }
`

const Bar = styled.div `
  width: 24px;
  height: 3px;
  background-color: #fff;
`
const MenuImage = (props) => {
  return (
    <BackgroundBox onClick={props.onClick}>
      <Bar/>
      <Bar/>
      <Bar/>
    </BackgroundBox>
  )
}

export default MenuImage;
import styled from "styled-components";

const colors = [
  '#fcc', '#fc0', '#a5a', '#f66',
  '#ccf', '#cfc', '#3f3', '#254'
]

const Board = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  /* border : 1px solid black; */
  animation-duration: 2s;
  animation-name: roller-ani;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes roller-ani {
    to {
      transform: rotate(1turn)
    }
  }
`
const Sector = styled.div`
  position: absolute;
  /* left: 250px;
  top: 250px; */
  width: 0;
  height: 0;
  border-top: 100px solid ${ props => colors[props.number]};
  border-left: 42px solid transparent;
  border-right: 42px solid transparent;
  border-bottom: 100px solid transparent;
  border-top-left-radius:  100px 24px;
  border-top-right-radius: 100px 24px;
  transform: translate(208px, 150px) scale(2) rotate( ${(props) => ((props.number * 45) + 'deg')} );
`


const Roller = () => {
return (
  <Board>
    {(new Array(8).fill(0)).map((item, index) => 
      <Sector key={index} number={index}/>)
    }
  </Board>
  )
}

export default Roller;
import styled from "styled-components";


const colors1 = [
  '#e22', '#eb0', '#949', '#e55'
]
const colors2 = [
  '#f33', '#fc0', '#a5a', '#f66'
]

const Container = styled.div `
  /* position: relative; */
  
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
`;


const Board = styled.div`
  /* position: absolute; */
  /* width: 500px;
  height: 500px; */
  /* border : 1px solid black; */
  
  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: roller-ani;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes roller-ani {
    to {
      transform: rotate(1turn)
    }
  }
`
const Wing = styled.div`
  position: absolute;
  
  width: 0;
  height: 0;

  border-top:    0px solid transparent;
  border-left:   100px solid transparent;
  
  border-right:  100px solid ${props => colors1[props.number]};
  border-bottom: 100px solid ${props => colors2[props.number]};

  transform:
    rotate( ${(props) => ((props.number * 90) + 'deg')} )
    translate(-99px, -50px)
    ;
`

const Tack = styled.div`
  position: absolute;
  width:  15px;
  height: 15px;
  border: 5px solid #333;
  background-color: #ccc;
  border-radius: 50%;
`

const Stick = styled.div`
  position: absolute;
  /* top: 0px; */
  
  width: 20px;
  height: 300px;
  background-color: brown;
  border-bottom-left-radius:  50% 5px;
  border-bottom-right-radius: 50% 5px;
  transform: translate(0px, 150px);
`


const Windmill = () => {
  return (
    <Container>
        <Stick/>
        <Board>
          {(new Array(4).fill(0)).map((item, index) => 
            <Wing key={index} number={index}/>)
          }
          <Tack/>
        </Board>
    </Container>
  )
}

export default Windmill;
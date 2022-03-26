import styled from "styled-components";

const AnimationBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 28px;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  
  display: flex;
  justify-content: center;
  align-items: center;
  

  border-radius: 50px;
  background-color: salmon;

  animation-name: box_ani;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  
  /* animation-fill-mode: forwards; */
  /* animation-direction: alternate; */
  /* animation-delay: 2s; */

  @keyframes box_ani {
    from {
        /* margin: 100px; */
        /* width: 50px;
        height: 50px; */
    }
    to {
        /* margin: 300px; */
        /* background-color: #ccc; */
        /* width: 100px; */
        /* height: 100px; */
        transform: rotate(360deg);
        /* transform: rotate(1turn) translate(12px, 50%); */
    }
  }
`
export default AnimationBox;
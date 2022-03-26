import styled from "styled-components";

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
  margin: 5px;
  color: #fff;
  border: 1px solid #fff;
  background-color: #333;
  transition-duration: 0.5s;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    color: #333;
    border: 1px solid #333;
    background-color: #fff;
    padding: 12px;
    margin: 3px;
  }
  :active {
    transition-duration: 0.1s;
    background-color: #999;
  }
`
export default Button;
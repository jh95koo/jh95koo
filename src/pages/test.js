import React from 'react'
import styled from 'styled-components';

const Image = styled.div`
  background-image: url(/logo512.png);
  background-repeat: no-repeat;
  background-size: 500px 500px;
  width: 500px;
  height: 500px;
`

const Box = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const InnerBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: #c6f6;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Test = () => {

  return (
    <div>
      <Image>
        <Box>
          <InnerBox>
            <h2>하늘이 참 맑다</h2>
          </InnerBox>
        </Box>
      </Image>
    </div>
  )
}

export default Test;
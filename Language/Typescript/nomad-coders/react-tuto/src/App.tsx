import React, { useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
  width: 30px;
  height: 30px;
  display: block;
`

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      {counter}
      <Button onClick={() => setCounter((prevCounter)=> prevCounter + 1)}>+</Button>
      <Button onClick={()=> setCounter((prevCounter)=> prevCounter - 1)}>-</Button>
    </div>
  );
}

export default App;

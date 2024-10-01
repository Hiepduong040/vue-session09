import React, { useState } from 'react'

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);
  const handleClick =()=>{
    
    setCount(count+1);
    console.log("gia tri count", count);
     
  }
  return (
    <div>App
      <p>gia tri cua count: {count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

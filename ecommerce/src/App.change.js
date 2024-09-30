import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
export const App = () => {
    const [count,setCount]=useState(1)
    useEffect(()=>console.log(count),[count])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>change</button>
    </div>
  );
}

export default App;
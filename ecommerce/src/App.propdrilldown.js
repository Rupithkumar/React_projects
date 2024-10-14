import React,{useState} from 'react'
import {Home} from './Home'
export const App=()=>{
  const [username]=useState('Bengaluru');
  return( 
    <div>
  <Home uname={username}/>
  </div>
  )
}
export default App
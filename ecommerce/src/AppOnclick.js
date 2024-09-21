import React from 'react'
import { useState } from 'react'
export const App=()=>{
    const [a , setA]=useState(1)
    return(
        <div >
            {a}
            <button onClick={()=>setA(a+1)}>
                change</button>
        </div>
    )
}
export default App;
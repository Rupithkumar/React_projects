import React from 'react'
import {useState} from 'react';
export const App=()=>{
    const marks =[1,2,3,4,5,6]
    return(
        <div>
            {
                marks.map((eachMark,index)=><li> {eachMark} </li>)
            }
        </div>
    )
}
export default App;
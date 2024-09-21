import React,{component} from 'react'
import Mypropcomponents from './components/My_propcomponent';
import {useEffect} from 'react';
export default class App extends component {
    state={
        Pname:"Bengaluru",
        Sname:"Karnataka",
    };
    render(){
        return (
            <div>
                <My_propcomponent Sname={this.state.Sname}/>
                Hi and i live in (this.state.Pname)
            </div>
        )
    }

}
import React from "react";
import Form from './Form'
import Template1 from '../imgs/template1.png'

function Template(){
    return(
        <div className = "container">
            <h1 className = "text-center">Select a Template</h1>
            <li><a href= './Form'><img src={Template1} /></a></li>
        </div>
    )
}

export default Template
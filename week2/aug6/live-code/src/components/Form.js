import React, { useState, useEffect } from 'react'

function Form(props){
    const[status, setStatus] = useState("Where's my dog?!?!");
    const[value, setValue] = useState("");
    
    function handleChange(event){
        setValue(event.target.value);
        console.log(event);
    }

    function handleSubmit(event){
        setStatus(value);
        setValue("");
        event.preventDefault();
    }
    return(
        <div>
            <h1>I AM A FORM</h1>
            <h2> {props.name} </h2>
            <h3> {status} </h3> 
            <form onSubmit = {handleSubmit}>
                <input type = "text" placeholder = "Add Name" value = {props.name}
                />
                <input
                    type = "text" 
                    placeholder = "Change Status" 
                    value = {value}
                    onChange = {handleChange}
                 />
                <input type = "submit"/>
            </form>
        </div>
    )
}

export default Form;
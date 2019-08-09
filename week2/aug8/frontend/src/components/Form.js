import React from "react";
import useForm from '../hooks/useForm';
import { createKick } from './apiService'

function Form (){
    const {values, handleSubmit, handleChange} = useForm(
        {
            blurb:"",
            backers: 0,
            pledged: 0,
            created: "",
        },
        sendData
    );

    function sendData(){
        const payload = values;
        const created = new Date();
        payload["created"] = created.toISOString();
        console.log(JSON.stringify(payload))
        createKick(payload)
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Blurb</label>
                <input 
                 onChange={handleChange}
                 type = "text" 
                 name = "blurb"
                 className = "form-control"
                 value = {values.blurb}
                 />
            </div>
            <div className = "form-group"> 
                <label>Backers</label>
                <input
                onChange = {handleChange}
                type = "number" 
                name = "backers"
                className = "form-control"
                value = {values.backers}
                />
            </div>
            <div className = "form-group">
                <label>Pledged</label>
                <input 
                type = "number" 
                step = "any"
                name = "pledged"
                className = "form-control"
                onChange = {handleChange}
                value = {values.pledged}
                />
            </div>
            <input type = "submit" value = "Submit" className = "form-control"/>
        </form>
    )
}

export default Form
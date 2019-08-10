import React, {useState, useEffect} from "react";
import useForm from '../hooks/useForm'
import createResume from './resumeService';
import Template1 from '../imgs/template1.png';


function Form (){

    const {education, setEducation, handleEducation} = useForm(
        {
            id: 1,
            //Level of Education
            level:"",
            school_name: "",
            date_attended: "",
            description: "",
            
        }, 
        sendData
    );

    const {skills, setSkills, handleSkills} = useForm(
        {
            Languages: "",
            Tools: "",
        },
        sendData
    )

    const {values, handleSubmit, handleChange} = useForm(
        {
            name:"",
            address: "",
            city: "",
            state: "",
            email: "",
            phone: "",
            Goal: "",
            education,
            skills,
            // experience
            // Projects: "",
            // Activities: "",
        },
        sendData
    );

    function sendData(){
        const payload=values;
        console.log(JSON.stringify(payload))
        createResume(payload);
        
    };

    return(
        <form onSubmit={handleSubmit} className = "container">
        <div className="form-group" className = "container">
            <label>Full Name</label>
            <input 
             onChange={handleChange}
             type="text" 
             name = "name"
             className="form-control"
             value={values.name}
             />
        </div>
        <div className="form-group" className = "container"> 
            <label>Address</label>
            <input
            onChange={handleChange}
            type="text" 
            name="address"
            className="form-control"
            value={values.address}
            />
        </div>
        <div className="form-group" className = "container">
            <label>Email Address</label>
            <input 
            type="text" 
            name="email"
            className="form-control"
            onChange={handleChange}
            value={values.email}
            />
        </div>
        <div className = "form-group" className = "container">
            <label>Phone Number</label>
            <input 
            type="text" 
            name="phone"
            className="form-control"
            onChange={handleChange}
            value={values.phone}
            />
        </div>
        <div className = "form-group" className = "container">
            <label>City</label>
            <input 
            type="text" 
            name="city"
            className="form-control"
            onChange={handleChange}
            value={values.city}
            />
        </div>
        <div className = "form-group" className = "container">
            <label>State</label>
            <input 
            type="text" 
            name="state"
            className="form-control"
            onChange={handleChange}
            value={values.state}
            />
        </div>
        <br />
        <br />
        <div className="form-group" className = "container">
            <label>Education</label>
            <input type = "checkbox" name = "Education" checked onChange = {handleSubmit}/>
            <input onChange={handleEducation} type="text" name = "level" className="form-control" value={values.education.level}/>
            <input onChange={handleEducation} type="text" name = "school_name" className="form-control" value={values.education.school_name}/>
            <input onChange={handleEducation} type="text" name = "date_attended" className="form-control" value={values.education.date_attended}/>
            <input onChange={handleEducation} type="text" name = "description" className="form-control" value={values.education.description}/>


        </div>



        <input type = "submit" value = "Submit" className = "form-control" /> 
,        <li><a href= {'./FinalPage'}><img src={Template1} /></a></li> 
        </form>

    )
    
}

export default Form
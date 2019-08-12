// import Template1 from '../imgs/template1.png';
import React from 'react';


function createResume(props){
    return (
        <div>
        <p><strong>{props.info.name}</strong></p>
        <p>{props.info.email} {props.info.address} {props.info.city} {props.info.state}  {props.info.phone}</p>
        <p><strong><em>OBJECTIVE </em></strong></p>
        <blockquote>
        <p>{props.info.description}</p>
        </blockquote>
        <p><strong><em>EDUCATION</em></strong></p>
        <blockquote>
        <p><strong>{props.education.level}</strong> {props.education.school_name}</p>
        <p>{props.education.date_attended}</p>
        <p>{props.education.description}</p>
        </blockquote>
        <p><strong>Thomas Jefferson High School for Science and Technology</strong> <em>Alexandria, VA</em> SEP 2013 - JUN 2017</p>
        <p><strong><em>SKILLS </em></strong></p>
        <blockquote>
        <p><strong>{props.skills.skill}</strong></p>
        </blockquote>
        </div>

    );
}
// function updateKick(payload, id){
//     return axios.put(`${API_URL}/${id}`, payload)
// }

export default createResume;
//export updateResume
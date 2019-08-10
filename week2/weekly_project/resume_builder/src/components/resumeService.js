// import Template1 from '../imgs/template1.png';
import FinalPage from './FinalPage'
import React from 'react';


function createResume(payload){
    return (
        <div className = "container">
            <h1 className = "text-center">Holo</h1>
            <li>{FinalPage}</li>
        </div>
    );
}
// function updateKick(payload, id){
//     return axios.put(`${API_URL}/${id}`, payload)
// }

export default createResume;
//export updateResume
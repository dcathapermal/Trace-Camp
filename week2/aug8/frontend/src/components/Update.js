import React, {useState, useEffect} from 'react';
import Form from './Form'
import getKick from "./apiService"

function Update(props){
    const [kick, setKick] = useState({});

    useEffect(() => {
        const id = props.match.params.id;
        getKick(id).then((response)=>{
            console.log(response.data);
        })
    })
    return(
        <div className = "container">
            <h1 className = "text-center">Update KickSaer {kick.id}</h1>
            <Form />
        </div>
    )
}

export default Update
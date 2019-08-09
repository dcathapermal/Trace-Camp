import React, {useState, useEffect} from 'react';
import {getKick, listKick} from "./apiService"
import {NavLink} from 'react-router-dom'

function Detail(props){
    const [kick, setKick] = useState({});

    useEffect(() =>{
        const id = props.match.params.id;
        getKick(id).then(response =>{
            setKick(response.data);
        });
    }, [])

    return(
        <div className = "container">
            <h1 className = "text-center">Detail</h1>
            <h3>Blurb: {kick.blurb}</h3>
            <h3>Backers: {kick.backers}</h3>
            <h3>Pledged: {kick.pledged}</h3> 
            <NavLink className = "btn btn-primary" to = {`update/${kick.id}`} > 
                Update Kickstarter
            </NavLink>
        </div>
    )
}

export default Detail
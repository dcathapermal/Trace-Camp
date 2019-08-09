import React, {useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = 'cEQnJG5P1Ycbmj0eq2H1Qm5f84erQyb27aHn0Pwa'

const style = {
    maxWidth: '500px',
    width: '100%'
};



const Apod = ({match}) => {
    const date = match.params.date;
    
    const [data, setData] = React.useState({});
    const[loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setError(false)
        setLoading(true)
        axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`
        )
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
            setError(true);
        });
    }, [date]);

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error!</div>

    console.log(data);

    return(

        <div style ={style}> 
            <h2>{data.title}</h2>
            <em>{data.copyright}</em>
            <br />
            <img style = {style} src = {data.url} alt = {data.title} />
            <p>{data.explanation}</p>
        </div>
    )
}

export default Apod
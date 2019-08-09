import React from 'react';
import axios from 'axios';

const API_KEY = 'cEQnJG5P1Ycbmj0eq2H1Qm5f84erQyb27aHn0Pwa'

const useNasa = (date) => {
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
   
    return {
        data,
        loading,
        error
        
    }   
};

// const Thumbnail = () => {
//     const{
//         data,
//         loading,
//         error,
//     } = useNasa(date)
//     return ''
// }

export default useNasa
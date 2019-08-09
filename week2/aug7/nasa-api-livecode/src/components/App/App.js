import React from 'react';
import Apod from '../Apod/Apod'
import DatePicker from '../DatePicker/DatePicker';
import { Route } from 'react-router-dom'
import Apods from '../Apods/Apods';

const App = () => {
    return (
        <div>
            <Route path = '/apods/' exact component ={Apods}/>
            <Route path = "/apods/:date" component={DatePicker}/>
            <Route path = "/apods/:date" component={Apod}/>
        </div>
    );
};

export default App;

localhost:3000/
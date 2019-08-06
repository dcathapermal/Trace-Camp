import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAstroids } from './nasaWorker';
import moment from 'moment';

function App(){

  const [ startDate, setStartDate ] = useState(moment().format("YYYY-MM-DD"));
  const [ endDate, setEndDate ] = useState(moment().format("YYYY-MM-DD"));


  useEffect(() => {
    console.log("This is config from the useEffect", startDate);
  })
  // getAstroids("2019-07-29", "2019-08-05").then(
  //   (data) => console.log(data),
  //   (error) => console.error(error)
  // )

  const handler =(even) => {
    console.log(event.target.value)
  }

  return (
      <div className="App">
        Test
        <p>
          <input value = {startDate.toString()} type = "date" id = "start" onChange= {(e) => setStartDate(e.target.value)/>
        </p>
        <p>
          <input value = {endDate.toString()} type = "date" id = "end" onChange= {(e) => setEndDate(e.target.value)/>
        </p>
      </div>
    );
}

export default App;

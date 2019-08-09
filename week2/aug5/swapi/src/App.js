import React, { useEffect, useState } from 'react';
import './App.css';
import { getPlanets } from './starwarsAPI';

function App() {
  
  const [page, setPage] = useState(1);
  const [planetData, setPlanetData] = useState([])

 
  useEffect(() => {
    console.log(page)
    getPlanets(page).then(
      //population
      (response) => setPlanetData(response.data.results.map((planet) => <div>{planet.name} {planet.population} </div>))    
    )
  }, [page])

  const formattedPopulation =
  population === 'unknown' ? chalk.red(population) : chalk.blue(population);


  return (
  
  <div className="App">
    Star Wars API Reading
    <h1>formattedPopulation(page.planet.population)</h1>
    <input type = "number" value = {page} onChange = {(e) => setPage(e.target.value)} min = "1" max = "7" />
    {planetData}
  </div>
  );
}

export default App;

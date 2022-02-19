import React, {useState} from 'react';
/* import Card from './components/Card.jsx'; */
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
/* import data, { Cairns } from './data.js'; */
import styles from './App.module.css';

const API_KEY = "4ae2636d8dfbdc3044bede63951a019b"

function App() {
  const [cities, setCities] =useState([])

   function handleAddCity(city){
     setCities((prevCitites) => {
       return[city, ...prevCitites];
     })
   }
   function handleRemoveCity(cityId){
      setCities((prevState) =>{
        return prevState.filter((city) =>{
          return cityId !== city.id}) /* devuelve todas las ciudades que si id no sea el del argumento */
      })
   }
   
   function onSearch(ciudad){
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
   .then(r => r.json())
   .then((recurso) => {
     if(recurso.main !== undefined){
       const ciudad = {
         min: Math.round(recurso.main.temp_min),
         max: Math.round(recurso.main.temp_max),
         img: recurso.weather[0].icon,
         id: recurso.id,
         wind: recurso.wind.speed,
         temp: recurso.main.temp,
         name: recurso.name,
         weather: recurso.weather[0].main,
         clouds: recurso.clouds.all,
         latitud: recurso.coord.lat,
         longitud: recurso.coord.lon
       };
       handleAddCity(ciudad)
     } else {
       alert("City not found");
     }
   });
  }
  return (
    <div className='App' className={styles.app} >
      <div className ={styles.bkg} /> 
      <div className={styles.container} >

        <div >
        <SearchBar onSearch={onSearch} />

        </div> 
            <div className= {styles.citiesContainer}>
          <div>
          <Cards cities={cities} onRemove={handleRemoveCity}/>
           </div>
          </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css'


export default function Cards({cities, onRemove}) {
  // acá va tu código
  // tip, podés usar un map

  return (
  <div className={styles.Cards} >
    
    {cities.map(city =>(
        <Card className={styles.Space} /* todo componente que lleve map, debe tener un key en su primer elemento */
        key={city.id}//key es reservada de react para su funcionamiento, no se ve. Pero si no esta no se acualiza el DOM del navegador
        max={city.max}//a esto tambien
        min={city.min}
        name={city.name}
        img={city.img}
        onClose={() => onRemove(city.id) }
      />
      ))}  
   
  </div>
 ) 

};
/* function Temp({label, temp}){
  return (
    <div className={styles.temp}>
      <span>{label} </span>
      <span>{temp} </span>
    </div>
  )
}
 */
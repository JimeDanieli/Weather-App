import React from 'react';
import styles from './Card.module.css'
import PropTypes from 'prop-types';

export default function Card(props) {
  // acá va tu código
 
const {max, min, name, img, onClose} = props;

 function handleOnClose(){
    if (typeof onClose === 'function') onClose();
 }

  return (
  
  
  <div className={`${styles.card}`}>
     <span> 
       <button className={styles.closeBtn} onClick ={handleOnClose}>x</button> {/* El onClose no lleva () porque no quiero invocarlo, quiero pasar la funcion solamente */}
      {name}
      </span>  {/* Al ser codigo js dentro de HTML require llaves */}
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/> {/* Todas las img deben tener el atributo alt para que llore menos el navegador */}
    <div className={styles.temps} >
     <Temp label="Min" temp={min}/>
     <Temp label="Max" temp={max}/>
    </div>
 
  </div>
  )
};
function Temp({label, temp}){
  return (
    <div className={styles.temp}>
      <span>{label} </span>
      <span>{temp} </span>
    </div>
  )
}

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};




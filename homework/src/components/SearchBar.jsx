import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
 function handleOnSearch(event){
   event.preventDefault();
   if (typeof onSearch === "function"){
     const input = document.getElementById("search-bar-input"); /* me traigo del documento el elemanto con ese id */
     onSearch(input.value); /* de ahi saco el valor y se lo paso al onsearch, el onsearch llega desde el app.js */
     input.value = ""; //esto me borra y deja vacio el input
   }
 }

  return (
    <form className = {styles.SearchBar} onSubmit={handleOnSearch}>  
       <input id='search-bar-input' type='text' placeholder='City...' className={styles.btnSearch} />
       <button className={styles.btnSearch} type= 'submit' >Add city</button>
    </form>
      
    )
};
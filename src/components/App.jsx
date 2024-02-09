import '../style/App.scss'
import { useEffect, useState } from 'react';
import getDataFromApi from "../services/api";
import CharacterList from './Characters/CharacterList';
import Filters from './Filters/Filters';
//import PropTypes from "prop-types";

function App() {

  //VARIABLES DE ESTADO

  const [characters, setCharacters] = useState([])//para guardar el Array de la API
  const [filterName, setFilterName] = useState("") //para guardar el Filter por nombre
  {/*Para controlar las peticiones del servidor hay que hacer un USE EFFECT= FUNCIÓN + ARRAY */ }
  useEffect(() => {
    {/*AL OBTENER LOS DATOS DE LA API RECIBIMOS UNA PROMESA, POR ESO USAMOS THEN */ }
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData)
    })

  }, [])


  //FUNCIONES

  //Para obtener valor del filtro por nombre
  const handleFilterName = (value) => {
    setFilterName(value)
  }


  //FILTRO
  const filteredCharacters = characters
    .filter((character) => character.name.toLowerCase().includes(filterName))
  // .filter((character) => {
  //   if (filterGender === "female") {
  //     return character.gender === "female"
  //   } else if (filterGender === "male") {
  //     return character.gender === "male"
  //   } else {
  //     return true //para que devuelva a todo el mundo
  //   }
  // })



  return (
    <>
      <h1>Web Harry Potter </h1>

      <Filters
        filterName={filterName} handleFilterName={handleFilterName}

      />

      <CharacterList characters={filteredCharacters} />



    </>
  );
}

export default App

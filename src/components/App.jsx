import '../style/App.scss'
import { useEffect, useState } from 'react';
import getDataFromApi from "../services/api";
import CharacterList from './Characters/CharacterList';
//import PropTypes from "prop-types";

function App() {

  //VARIABLES DE ESTADO

  const [characters, setCharacters] = useState([])//para guardar el Array de la API

  {/*Para controlar las peticiones del servidor hay que hacer un USE EFFECT= FUNCIÓN + ARRAY */ }
  useEffect(() => {
    {/*AL OBTENER LOS DATOS DE LA API RECIBIMOS UNA PROMESA, POR ESO USAMOS THEN */ }
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData)
    })

  }, [])


  return (
    <>
      <h1>Web Harry Potter </h1>

      <CharacterList characters={characters} />

    </>
  );
}

export default App

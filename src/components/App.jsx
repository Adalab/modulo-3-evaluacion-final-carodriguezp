import '../style/App.scss'
import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
import getDataFromApi from "../services/api";
import CharacterList from './Characters/CharacterList';
import Filters from './Filters/Filters';
import CharacterDetail from './Characters/CharacterDetail';
//import PropTypes from "prop-types";

function App() {

  //VARIABLES DE ESTADO

  const [characters, setCharacters] = useState([])//para guardar el Array de la API
  const [filterName, setFilterName] = useState("") //para guardar el Filter por nombre
  const [filterHouse, setFilterHouse] = useState("Gryffindor")

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

  //Para obtener valor del filtro por casa
  const handleFilterHouse = (value) => {
    setFilterHouse(value)
  }

  //para cerrar characterDetail

  const handleClick = () => {

  }


  //FILTRO
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName)
      // if () {
      //   return character;
      // } else {
      //   setResultSearch(`No hay ningún personaje que coincida con la palabra ${character.name}`);
      // }
    })


    .filter((character) => {
      if (filterHouse === character.house) {
        return character.house
      } else if (filterHouse === "All") {
        return true
      }
    })
  // .filter((character) => {
  //   if (filterGender === "female") {
  //     return character.gender === "female"
  //   } else if (filterGender === "male") {
  //     return character.gender === "male"
  //   } else {
  //     return true //para que devuelva a todo el mundo
  //   }
  // })

  const hasFiltered = !!filteredCharacters.length

  {/*RUTAS PATH DETAIL */ }

  const { pathname } = useLocation(); //pathname es la propiedad de la info de la ruta, hacemos destructuring

  const routeData = matchPath("/character/:idCharacter", pathname)

  //PASO 2 sacamos el id del usuario
  const idCharacter = routeData !== null ? routeData.params.idCharacter : null

  //PASO 3
  const characterData = characters.find((character) => character.id === idCharacter);

  return (
    <main className='container'>
      <h1>Web Harry Potter </h1>

      {/*RUTAS */}

      <Routes>
        <Route path='/' element={
          <>
            <Filters
              filterName={filterName} handleFilterName={handleFilterName} hasFiltered={hasFiltered}
              filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}

            />

            <CharacterList characters={filteredCharacters} />
          </>
        }
        />


        <Route path='/character/:idCharacter' element={<CharacterDetail character={characterData} handleClick={handleClick} />} />
      </Routes>
    </main>
  );
}

export default App

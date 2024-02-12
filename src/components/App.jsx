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

  //FILTRO
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase())

    })


    .filter((character) => {
      if (filterHouse === character.house) {
        return character.house
      } else if (filterHouse === "All") {
        return true
      }
    })

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


      <h1>Harry potter</h1>
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


        <Route path='/character/:idCharacter' element={<CharacterDetail character={characterData} />} />
      </Routes>
    </main>
  );
}

export default App

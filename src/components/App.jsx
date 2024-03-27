import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import CharacterList from './Characters/CharacterList';
import Filters from './Filters/Filters';
import CharacterDetail from './Characters/CharacterDetail';
import Footer from './Footer';
import LoadingState from "./LoadingState";
import { getDataFromApi } from "../services/api";
import '../style/App.scss';
//import PropTypes from "prop-types";

function App() {

  //VARIABLES DE ESTADO

  const [characters, setCharacters] = useState([])//para guardar el Array de la API
  const [filterName, setFilterName] = useState("") //para guardar el Filter por nombre
  const [filterHouse, setFilterHouse] = useState("All")
  const [isLoading, setIsLoading] = useState(true);

  {/*Para controlar las peticiones del servidor hay que hacer un USE EFFECT= FUNCIÓN + ARRAY */ }
  useEffect(() => {
    {/*AL OBTENER LOS DATOS DE LA API RECIBIMOS UNA PROMESA, POR ESO USAMOS THEN */ }
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData)
      setIsLoading(false)
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


  return (

    isLoading ? <LoadingState /> :
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


          <Route path='/character/:idCharacter' element={<CharacterDetail />} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App

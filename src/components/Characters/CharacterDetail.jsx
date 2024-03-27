import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import CharacterDescendants from "./CharacterDescendants";
import { getDataByIdFromApi } from "../../services/api";
import LoadingState from "../LoadingState";


function CharacterDetail() {
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { pathname } = useLocation(); //pathname es la propiedad de la info de la ruta, hacemos destructuring

    const getIdFromURL = () => {
        {/*RUTAS PATH DETAIL */ }

        const routeData = matchPath("/character/:idCharacter", pathname)

        //PASO 2 sacamos el id del usuario
        const idCharacter = routeData.params.idCharacter; //es un objeto porque accede a cositas

        return idCharacter
    }

    const setCharacterFromApi = async () => {

        const id = getIdFromURL();

        const characterFromApi = await getDataByIdFromApi(id)
        setCharacter(characterFromApi)
        setIsLoading(false)
    }

    useEffect(() => {
        setCharacterFromApi()
    }, [])


    let icon = "";
    let isStudent = "";


    if (character.student) {
        isStudent = "Student";
        icon = "fa-graduation-cap";
    } else {
        isStudent = "Not Student";
        icon = "fa-wand-magic-sparkles";
    }


    return (

        isLoading ? <LoadingState /> :
            <div className="background-detail" >

                <Link to={`/`} >
                    <i className="fa-solid fa-square-xmark"></i>
                </Link>

                <div className="background-detail-div">
                    <img className="img" src={character.image} alt={character.name} />
                    <section className="background-detail-div-section">
                        <p>{character.name}</p>
                        <p>{isStudent} <i className={`fa-solid ${icon}`}></i> </p>
                        <p>{character.house}</p>
                        <CharacterDescendants character={character} />
                    </section>
                </div>
            </div>
    )

}

CharacterDetail.propTypes = {
    character: PropTypes.object,
    handleClick: PropTypes.func,
}

export default CharacterDetail

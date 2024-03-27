import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard";


function CharacterList({ characters }) {


    {/*Vamos a hacer el MAP de cada usuario (li) en la función rendercharacters */ }

    const renderCharacters = characters.map((character) => {

        return <li className="list-card" key={character.id}>
            <Link to={`/character/${character.id}`}>
                <CharacterCard character={character} />
            </Link>
        </li>
    })

    return (

        <section className="container-character">

            <h2 className="">List of Characters</h2>

            <ul className="container-character-list" >
                {renderCharacters}
            </ul>

        </section>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.array,
}

export default CharacterList

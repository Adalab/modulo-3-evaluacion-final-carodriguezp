import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

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
        <section className="">

            <h2 className="">Lista de personajes</h2>

            <ul className="list" >
                {renderCharacters}
            </ul>

        </section>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.array,
}

export default CharacterList

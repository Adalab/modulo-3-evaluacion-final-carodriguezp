import PropTypes from "prop-types";

function CharacterCard({ character }) {
    //condicional imagen
    if (character.image === "") {

        character.image = 'https://placehold.co/150x200?text=Not+Found';
    }

    return (
        <div className="list-card-div">
            <img className="img" src={character.image} alt={character.name} />
            <h4>{character.name}</h4>
            <p>{character.specie}</p>
            <p>{character.gender}</p>
            <p>{character.house}</p>
        </div>
    )
}

CharacterCard.propTypes = {
    character: PropTypes.object,
}

export default CharacterCard

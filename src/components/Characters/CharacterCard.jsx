import PropTypes from "prop-types";

function CharacterCard({ character }) {
    //condicional imagen
    if (character.image === "") {

        character.image = 'https://placehold.co/150x200?text=Not+Found';
    }
    //condicional estudiante
    character.estudianteDeHogwarts ? character.estudianteDeHogwarts = 'Student' : character.estudianteDeHogwarts = 'Not student'

    return (
        <div className="list-card-div">
            <img className="list-card-div-img" src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.estudianteDeHogwarts}</p>
            <p>{character.house}</p>
        </div>
    )
}

CharacterCard.propTypes = {
    character: PropTypes.object,
}

export default CharacterCard

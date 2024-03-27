import PropTypes from "prop-types";

function CharacterDescendants({ character }) {


    if (character.sons.length === 0) {

        return <p className="descendant">Descendants: None</p>
    } else {

        const sonsList = character.sons.map((son, index) => (
            <li key={index}>{son}</li>
        ));
        return <ul className="descendant">Descendants: {sonsList}</ul>;
    }

}


CharacterDescendants.propTypes = {
    character: PropTypes.object,

}

export default CharacterDescendants

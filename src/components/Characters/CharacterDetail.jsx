import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function CharacterDetail({ character }) {


    let icon = "";
    let isStudent = "";

    if (character.student) {
        isStudent = "Student";
        icon = "fa-heart-pulse";
    } else {
        isStudent = "Not Student";
        icon = "fa-skull";
    }

    return (
        <div className="background-detail" >

            <Link to={`/`} >
                <i className="fa-solid fa-square-xmark"></i>
            </Link>

            <div className="background-detail-div">
                <img className="img" src={character.image} alt={character.personaje} />
                <section className="background-detail-div-section">
                    <p>{character.personaje}</p>
                    <p>{isStudent} <i className={`fa-solid ${icon}`}></i> </p>
                    <p>{character.house}</p>
                    <p>Descendants: {character.sons}</p>
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

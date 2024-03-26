import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterDescendants from "./CharacterDescendants";


function CharacterDetail({ character }) {


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
